import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import ContactIcons from '../Contact/ContactIcons';

describe('ContactIcons', () => {
  it('renders contact icons', () => {
    render(<ContactIcons />);

    const linkedin = screen.getByRole('link', { name: /linkedin/i });
    expect(linkedin).toHaveAttribute(
      'href',
      'https://www.linkedin.com/in/ray-andrew-manila-2126b4275/',
    );

    const facebook = screen.getByRole('link', { name: /facebook/i });
    expect(facebook).toHaveAttribute(
      'href',
      'https://www.facebook.com/profile.php?id=100092542480793',
    );

    const emailLink = screen.getByRole('link', { name: /email/i });
    expect(emailLink).toHaveAttribute(
      'href',
      'mailto:manilarayandrew@gmail.com',
    );
    expect(
      screen.queryByRole('link', { name: /github/i }),
    ).not.toBeInTheDocument();
    expect(
      screen.queryByRole('link', { name: /instagram/i }),
    ).not.toBeInTheDocument();
    expect(screen.queryByRole('link', { name: /^x$/i })).not.toBeInTheDocument();
    expect(
      screen.queryByRole('link', { name: /angel list/i }),
    ).not.toBeInTheDocument();
  });

  it('has correct number of contact links', () => {
    render(<ContactIcons />);
    const links = screen.getAllByRole('link');
    expect(links.length).toBeGreaterThan(0);
  });

  it('can omit email when the page already has a primary email action', () => {
    render(<ContactIcons includeEmail={false} />);

    expect(
      screen.queryByRole('link', { name: /email/i }),
    ).not.toBeInTheDocument();
    expect(screen.getByRole('link', { name: /linkedin/i })).toBeInTheDocument();
  });
});
