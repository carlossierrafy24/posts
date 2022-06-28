import React from 'react';
import Pagination from './Pagination';
import { render, screen } from '@testing-library/react';

test('should render pagination buttons', () => {
    render(<Pagination />);
    expect(screen.getByText('Prev')).toBeInTheDocument();
    expect(screen.getByText('Next')).toBeInTheDocument();
});
test('should render pagination buttons disabled', () => {
    render(<Pagination />);
    expect(screen.getByText('Prev').classList.contains('disabled')).toBe(true);
});
