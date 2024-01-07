function ConfirmedBooking({confirmationMessage}) {  
  return (
    <main className="container mb-3">
      <div className="row">
        <div className="col">
          {confirmationMessage}
        </div>
      </div>
    </main>
  );
}

export default ConfirmedBooking;
