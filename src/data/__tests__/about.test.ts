import { describe, expect, it } from 'vitest';

import { aboutMarkdown } from '../about';

describe('about data', () => {
  it('exports aboutMarkdown as a string', () => {
    expect(typeof aboutMarkdown).toBe('string');
    expect(aboutMarkdown.length).toBeGreaterThan(0);
  });

  it('contains the intro section', () => {
    expect(aboutMarkdown).toContain('# Intro');
    expect(aboutMarkdown).toContain('clean, efficient code');
    expect(aboutMarkdown).toContain('user experience');
  });

  it('contains the history section', () => {
    expect(aboutMarkdown).toContain('# Work History');
    expect(aboutMarkdown).toContain('Manilapower Technologies Inc.');
  });

  it('keeps the page to the intro and work history', () => {
    expect(aboutMarkdown).not.toContain('# I Like');
    expect(aboutMarkdown).not.toContain('# Travel / Geography');
    expect(aboutMarkdown).not.toContain('# Fun Facts');
    expect(aboutMarkdown).not.toContain('# I Dream Of');
    expect(aboutMarkdown).not.toContain('# Websites from People I Admire');
  });

  it('contains properly formatted headers', () => {
    const headerRegex = /^#+ .+$/gm;
    const headers = aboutMarkdown.match(headerRegex);

    expect(headers).toEqual(['# Intro', '# Work History']);
  });
});
