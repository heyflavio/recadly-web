/* Waitlist signup wiring.
 *
 * Picks up every <form class="signup" data-waitlist-source="…"> on the
 * page, POSTs the email to the Recadly backend, and swaps the submit
 * button label to the localized success string on success (or shows
 * an inline error message on failure).
 *
 * Endpoint lives at https://recadly-backend.fly.dev/waitlist and is
 * deduped server-side: resubmits return `existed: true` and we still
 * show the success state — gentler than telling the visitor they
 * already signed up.
 */
(function () {
  'use strict';

  var ENDPOINT = 'https://recadly-backend.fly.dev/waitlist';

  function i18n(key, fallback) {
    try {
      var rb = window.RecadlyI18n;
      var lang = rb && rb.currentLang && rb.currentLang();
      var dict = rb && rb.translations && lang && rb.translations[lang];
      var hit = dict && dict[key];
      return hit || fallback || key;
    } catch (_) {
      return fallback || key;
    }
  }

  function pickLocale() {
    try {
      return (
        (window.RecadlyI18n && window.RecadlyI18n.currentLang && window.RecadlyI18n.currentLang()) ||
        (navigator.language || '').slice(0, 5) ||
        null
      );
    } catch (_) {
      return null;
    }
  }

  function attach(form) {
    if (form.__waitlistWired) return;
    form.__waitlistWired = true;

    var input = form.querySelector('input[type="email"]');
    var button = form.querySelector('button[type="submit"]');
    var source = form.getAttribute('data-waitlist-source') || 'web';
    var successKey = form.getAttribute('data-success-key') || 'hero.cta_done';
    var successFallback =
      form.getAttribute('data-success-fallback') || 'You’re on the list ✨';

    // Error label sits right under the form, hidden until something
    // goes wrong. We create it lazily so the markup stays clean.
    var errorEl = null;
    function showError(text) {
      if (!errorEl) {
        errorEl = document.createElement('div');
        errorEl.className = 'signup-error';
        errorEl.setAttribute('role', 'alert');
        errorEl.style.cssText =
          'margin-top: 8px; font-size: 13px; color: #c2410c; text-align: left;';
        form.insertAdjacentElement('afterend', errorEl);
      }
      errorEl.textContent = text;
    }
    function clearError() {
      if (errorEl) errorEl.textContent = '';
    }

    form.addEventListener('submit', function (event) {
      event.preventDefault();
      clearError();
      if (!input || !button) return;

      var email = (input.value || '').trim();
      if (!email) return;

      var prevText = button.textContent;
      button.disabled = true;
      button.textContent = '…';

      fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: email,
          source: source,
          locale: pickLocale(),
        }),
      })
        .then(function (res) {
          return res.json().then(function (data) {
            return { status: res.status, data: data };
          });
        })
        .then(function (r) {
          if (r.status >= 200 && r.status < 300) {
            button.textContent = i18n(successKey, successFallback);
            input.value = '';
            input.disabled = true;
          } else if (r.data && r.data.error === 'invalid_email') {
            button.textContent = prevText;
            button.disabled = false;
            showError(
              i18n('hero.cta_error_email', 'That email doesn’t look right.'),
            );
          } else {
            button.textContent = prevText;
            button.disabled = false;
            showError(
              i18n(
                'hero.cta_error',
                'Couldn’t reach the server — try again in a moment.',
              ),
            );
          }
        })
        .catch(function () {
          button.textContent = prevText;
          button.disabled = false;
          showError(
            i18n(
              'hero.cta_error',
              'Couldn’t reach the server — try again in a moment.',
            ),
          );
        });
    });

  }

  function init() {
    var forms = document.querySelectorAll('form.signup[data-waitlist-source]');
    forms.forEach(attach);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
