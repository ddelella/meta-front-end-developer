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

    /*
    it('Submission, no user interaction, expecting 2 errors', async () => {
        render(<BookingForm availableTimes={availableTimes} />);
        userEvent.selectOptions(screen.getByTestId("reservationTime"), "12:00");
        await waitFor(() => {
            expect(screen.getByTestId("reservationTime")).toHaveValue("12:00");
        });
    });
    */
});

describe ('Reservation Date', () => {
    it('Exist on the page', () => {
        render(<BookingForm availableTimes={availableTimes} />);
        expect(screen.getByTestId("reservationDate")).toBeInTheDocument();
    });

    /*
    it('Change value to 02/14/2024', async () => {
        render(<BookingForm availableTimes={availableTimes} />);
        userEvent.type(screen.getByTestId("reservationDate"), "2024-02-14");
        await waitFor(() => {
            expect(screen.getByTestId("reservationDate")).toHaveValue("2024-02-14");
        });
    });
    */
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