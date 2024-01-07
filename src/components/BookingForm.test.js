import { render, screen } from "@testing-library/react";
import BookingForm from './BookingForm';

test('Renders the BookingForm heading', () => {
    render(<BookingForm availableTimes={[]} availableOccasions={[]} />);
    const headingElement = screen.getByText("Make a Reservation");
    expect(headingElement).toBeInTheDocument();
});