import test from 'node:test';
import assert from 'node:assert/strict';
import { faqs, portalLink, PORTAL_URL, services } from '../src/content.js';

test('all services point to distinct HTTPS routes on the existing portal', () => {
  assert.equal(new URL(PORTAL_URL).protocol, 'https:');
  assert.deepEqual(
    services.map((service) => service.path),
    ['surat', 'keuangan', 'ronda', 'kegiatan', 'pengaduan', 'dashboard'],
  );
  assert.equal(new Set(services.map((service) => service.path)).size, services.length);
  for (const service of services) {
    assert.ok(service.name && service.description && service.icon);
    assert.equal(portalLink(service.path), `${PORTAL_URL}/html/${service.path}.html`);
  }
});

test('help answers are available without logging in', () => {
  assert.ok(faqs.length >= 3);
  for (const faq of faqs) {
    assert.ok(faq.question.length > 0);
    assert.ok(faq.answer.length > 0);
  }
});
