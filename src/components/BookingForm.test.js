import { render, screen, cleanup, fireEvent, waitFor } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import BookingForm from './BookingForm';

const availableTimes = ["10:00","11:00","12:00"];

afterEach(cleanup);

describe ('Form', () => {
    it('Renders the header', () => {
        render(<BookingForm availableTimes={availableTimes} />);
        const headingElement = screen.getByText("Make a Reservation");
        expect(headingElement).toBeInTheDocument();
    });
});

describe ('Reservation Date', () => {
    it('Exist on the page', () => {
        render(<BookingForm availableTimes={availableTimes} />);
        expect(screen.getByTestId("reservationDate")).toBeInTheDocument();
    });
});

describe ('Reservation Times', () => {
    it('Exist on the page', () => {
        render(<BookingForm availableTimes={availableTimes} />);
        expect(screen.getByTestId("reservationTime")).toBeInTheDocument();
    });

    it('Change selected value to 12:00', async () => {
        render(<BookingForm availableTimes={availableTimes} />);
        userEvent.selectOptions(screen.getByTestId("reservationTime"), "12:00");
        await waitFor(() => {
            expect(screen.getByTestId("reservationTime")).toHaveValue("12:00");
        });
    });
});

describe ('Number of Guests', () => {
    it('Exist on the page', () => {
        render(<BookingForm availableTimes={availableTimes} />);
        expect(screen.getByTestId("numberOfGuests")).toBeInTheDocument();
    });
});

describe ('Occasion', () => {
    it('Exist on the page', () => {
        render(<BookingForm availableTimes={availableTimes} />);
        expect(screen.getByTestId("occasion")).toBeInTheDocument();
    });

    it('Change selected value to Birthday', async () => {
        render(<BookingForm availableTimes={availableTimes} />);
        userEvent.selectOptions(screen.getByTestId("occasion"), "Birthday");
        await waitFor(() => {
            expect(screen.getByTestId("occasion")).toHaveValue("Birthday");
        });
    });
});