const Alert = ({ error, isError, isSuccess }) => {
  return (
    <div>
      {error === false ? (
        <div className="bg-[#dcfce7] border border-[#bbf7d0] rounded-md p-4">
          <p className="text-[#166534]">{isSuccess}</p>
        </div>
      ) : error === true ? (
        <div className="bg-[#fef2f2] border border-[#fee2e2] rounded-md p-4">
          <p className="text-[#991b1b]">{isError}</p>
        </div>
      ) : null}
    </div>
  );
};

const AlertSubmit = ({ isError, isSuccess }) => {
  return (
    <div>
      {isError ? (
        <div className="bg-[#fef2f2] border border-[#fee2e2] rounded-md p-4">
          <p className="text-[#991b1b]">{isError}</p>
        </div>
      ) : isSuccess ? (
        <div className="bg-[#dcfce7] border border-[#bbf7d0] rounded-md p-4">
          <p className="text-[#166534]">{isSuccess}</p>
        </div>
      ) : null}
    </div>
  );
}
export {Alert, AlertSubmit};
// export { Alert, AlertSubmit};
