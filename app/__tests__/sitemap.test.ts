import { describe, expect, it } from 'vitest';

import { SITE_URL } from '@/lib/utils';
import sitemap from '../sitemap';

describe('sitemap', () => {
  it('uses trailing slashes for exported page routes', () => {
    const entries = sitemap();

    expect(entries).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ url: `${SITE_URL}/` }),
        expect.objectContaining({ url: `${SITE_URL}/about/` }),
        expect.objectContaining({ url: `${SITE_URL}/resume/` }),
        expect.objectContaining({ url: `${SITE_URL}/projects/` }),
        expect.objectContaining({ url: `${SITE_URL}/contact/` }),
      ]),
    );
  });

  it('does not invent modification dates for static pages', () => {
    const entries = sitemap();

    expect(entries.every((entry) => entry.lastModified === undefined)).toBe(
      true,
    );
  });

  it('does not list writing or stats', () => {
    const urls = sitemap().map((entry) => entry.url);

    expect(urls.some((url) => url.includes('/writing'))).toBe(false);
    expect(urls.some((url) => url.includes('/stats'))).toBe(false);
  });
});
