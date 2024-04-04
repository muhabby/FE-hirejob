
const Button = ({text}) => {
  return (
    <div>
      <div className="w-full p-3 bg-primary rounded-md md:w-48">
        <p className="font-semibold text-white text-center">{text}</p>
      </div>
    </div>
    // Example Use
    // <Button text='Masuk Untuk pekerja' />
  )
}

export default Button