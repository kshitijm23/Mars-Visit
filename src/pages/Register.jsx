import { useState, useEffect } from "react";
import FormBackground from "/stripshuttle1.svg";
import FormBackgroundMobile from "/shuttleblank.svg";
import { links } from "../link";
import Dashboard from "./Dashboard";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const Register = () => {
  const navigate = useNavigate();

  // Step state
  const [activeStep, setActiveStep] = useState(1);

  // Form state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [dob, setDob] = useState("");
  const [dep, setDep] = useState("");
  const [ret, setRet] = useState("");
  const [Ephone, setEPhone] = useState("");
  const [request, setRequest] = useState("");
  const [accommodation, setAccommodation] = useState("");
  const [nationality, setNationality] = useState("");
  const [med, setMed] = useState("");

  // Health Declaration
  const [healthDeclaration, setHealthDeclaration] = useState("");

  // Error states
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [dobError, setDobError] = useState(false);
  const [depError, setDepError] = useState(false);
  const [retError, setRetError] = useState(false);
  const [medError, setMedError] = useState(false);
  const [EphoneError, setEPhoneError] = useState(false);
  const [requestError, setRequestError] = useState(false);
  const [nationalityError, setNationalityError] = useState(false);
  const [accommodationError, setAccommodationError] = useState(false);

  // Plan and payment state
  // const [plan, setPlan] = useState("monthly");
  // const [payment, setPayment] = useState("Arcade");

  // Add-ons state
  // const [onlineService, setOnlineService] = useState(false);
  // const [largeStorage, setLargeStorage] = useState(false);
  // const [customizableProfile, setCustomizableProfile] = useState(false);
  const [showFinalModal, setShowFinalModal] = useState(false);

  // const [total, setTotal] = useState("0");

  // Reset localStorage on page refresh
  useEffect(() => {
    const handleBeforeUnload = () => {
      localStorage.clear();
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, []);

  // Store form data in localStorage to persist during navigation
  useEffect(() => {
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("phone", phone);
    localStorage.setItem("dob", dob);
    localStorage.setItem("dep", dep);
    localStorage.setItem("ret", ret);
    localStorage.setItem("request", request);
    localStorage.setItem("accommodation", accommodation);
    localStorage.setItem("nationality", nationality);
    localStorage.setItem("Ephone", Ephone);
    localStorage.setItem("healthDeclaration", healthDeclaration);
  }, [name, email, phone, dob, dep, ret, request, accommodation, nationality, Ephone, healthDeclaration]);

  // Calculate total cost based on selections
  const calculateTotal = () => {
    // let basePrice = plan === "monthly" ? 9 : 90;
    // if (payment === "Advanced") basePrice += plan === "monthly" ? 3 : 30;
    // if (payment === "Pro") basePrice += plan === "monthly" ? 6 : 60;

    // if (onlineService) basePrice += plan === "monthly" ? 1 : 10;
    // if (largeStorage) basePrice += plan === "monthly" ? 2 : 20;
    // if (customizableProfile) basePrice += plan === "monthly" ? 2 : 20;

    // setTotal(basePrice);
  };

  // Reset form and localStorage
  const resetForm = () => {
    setName("");
    setEmail("");
    setPhone("");
    setDob("");
    setDep("");
    setRet("");
    setRequest("");
    setAccommodation("");
    setNationality("");
    setEPhone("");
    setHealthDeclaration("");
    // setPlan("monthly");
    // setPayment("Arcade");
    // setOnlineService(false);
    // setLargeStorage(false);
    // setCustomizableProfile(false);
    // setTotal("0");
    setMed("");
    localStorage.clear();
  };

  return (
    
    <div
      className="h-full w-full font-ubuntu flex justify-center items-center bg-cover bg-center"
      style={{
        backgroundImage: "url('/marsblack.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="z-[0] fixed w-full top-0 left-0 md:hidden flex justify-center items-center h-[20%]">
        <img
          src={FormBackgroundMobile}
          alt="form background"
          className="z-[0] fixed w-full top-0 left-0 md:hidden"
        />
        <div className="md:hidden flex gap-2">
          {links.map((link) => (
            <div
              key={link.id}
              className="flex gap-5 tracking-wider cursor-default z-[10000] items-center justify-center"
            >
              <div
                className={`h-10 w-10 rounded-full transition-all duration-300 flex justify-center items-center ${
                  activeStep === link.id
                    ? `bg-LightBlue text-MarineBlue`
                    : `text-white border-white border-2`
                } font-bold`}
              >
                {link.id}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="w-[90%] z-[1000] md:w-[50%] min-h-[80%] bg-white p-3 gap-5 rounded-2xl flex flex-col overflow-auto">

        <div className="relative w-[35%] h-full rounded-xl overflow-hidden">
          <img
            src={FormBackground}
            alt="form background"
            className="z-[0] absolute hidden md:block w-full h-full object-cover"
          />
        </div>

        <div className="w-[75%] h-full px-2 md:px-10 py-2 md:py-10 flex flex-col gap-2">
          {/* Step 1: Personal Info */}
          {activeStep === 1 && (
            <div className="flex flex-col">
              <div className="text-3xl font-bold text-MarineBlue">Personal Info</div>
              <div className="text-sm mt-3 text-CoolGray">
                Excited for your Mars Visit? Please provide your details below.
              </div>

              <div className="flex flex-col gap-2 mt-8">
                <InputField
                  label="Name"
                  type="text"
                  value={name}
                  placeholder="e.g. Akshata Shinde"
                  error={nameError}
                  onChange={(e) => {
                    setName(e.target.value);
                    setNameError(false);
                  }}
                />

                <InputField
                  label="Email"
                  type="email"
                  value={email}
                  placeholder="e.g. akshata@gmail.com"
                  error={emailError}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setEmailError(false);
                  }}
                />

                <InputField
                  label="Phone Number"
                  type="tel"
                  value={phone}
                  placeholder="e.g. +1 234 567 890"
                  error={phoneError}
                  onChange={(e) => {
                    setPhone(e.target.value);
                    setPhoneError(false);
                  }}
                />

                <InputField
                  label="Date of Birth"
                  type="date"
                  value={dob}
                  error={dobError}
                  onChange={(e) => {
                    setDob(e.target.value);
                    setDobError(false);
                  }}
                />

                <InputField
                  label="Nationality"
                  type="text"
                  value={nationality}
                  placeholder="e.g. American, Indian"
                  error={nationalityError}
                  onChange={(e) => {
                    setNationality(e.target.value);
                    setNationalityError(false);
                  }}
                />

                <div className="w-full flex justify-center md:justify-end">
                  <button
                    className="text-white bg-MarineBlue active:scale-95 hover:bg-PurplishBlue font-bold px-5 py-2 rounded-lg"
                    onClick={() => {
                      if (name && email && phone && dob && nationality) {
                        setActiveStep(2);
                        toast.success("Step 1 completed");
                      } else {
                        if (!name) setNameError(true);
                        if (!email) setEmailError(true);
                        if (!phone) setPhoneError(true);
                        if (!dob) setDobError(true);
                        if (!nationality) setNationalityError(true);
                        toast.error("All fields are required.");
                      }
                    }}
                  >
                    Next Step
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Travel Preferences */}
          {activeStep === 2 && (
            <div className="flex flex-col">
              <div className="text-3xl font-bold text-MarineBlue">Travel Preferences</div>
              <div className="text-sm mt-3 text-CoolGray">Please provide your travel preferences below.</div>

              <InputField
                label="Departure Date"
                type="date"
                value={dep}
                error={depError}
                onChange={(e) => {
                  setDep(e.target.value);
                  setDepError(false);
                }}
              />

              <InputField
                label="Return Date"
                type="date"
                value={ret}
                error={retError}
                onChange={(e) => {
                  setRet(e.target.value);
                  setRetError(false);
                }}
              />

              <SelectField
                label="Accommodation Preference"
                value={accommodation}
                error={accommodationError}
                onChange={(e) => {
                  setAccommodation(e.target.value);
                  setAccommodationError(false);
                }}
                options={["Space Hotel", "Martian Base", "Hotel Red", "Casa de Mars"]}
              />

              <InputField
                label="Special Requests"
                type="text"
                value={request}
                placeholder="Any special requests?"
                error={requestError}
                onChange={(e) => {
                  setRequest(e.target.value);
                  setRequestError(false);
                }}
              />

              <div className="w-full mt-10 flex justify-between items-center">
                <button
                  onClick={() => setActiveStep(1)}
                  className="text-CoolGray font-bold"
                >
                  Go Back
                </button>
                <button
                  className="text-white bg-MarineBlue active:scale-95 hover:bg-PurplishBlue font-bold px-5 py-2 rounded-lg"
                  onClick={() => {
                    if (dep && ret && accommodation) {
                      setActiveStep(3);
                      toast.success("Step 2 completed");
                    } else {
                      if (!dep) setDepError(true);
                      if (!ret) setRetError(true);
                      if (!accommodation) setAccommodationError(true);
                      toast.error("All fields are required.");
                    }
                  }}
                >
                  Next Step
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Health and Safety */}
          {activeStep === 3 && (
            <div className="flex flex-col">
              <div className="text-3xl font-bold text-MarineBlue">Health and Safety</div>
              <div className="font-semibold text-sm mt-3 mb-9 text-CoolGray">
                Let us help you ensure your good health and top-notch safety:
              </div>

              <h3 className="text-lg font-semibold text-MarineBlue mb-2">Health Declaration</h3>
              <div className="flex gap-4 mb-5">
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="healthDeclaration"
                    value="Yes"
                    checked={healthDeclaration === "Yes"}
                    onChange={(e) => setHealthDeclaration(e.target.value)}
                  />
                  Yes
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="healthDeclaration"
                    value="No"
                    checked={healthDeclaration === "No"}
                    onChange={(e) => setHealthDeclaration(e.target.value)}
                  />
                  No
                </label>
              </div>

              {/* Emergency Phone Number with Validation */}
              <InputField
                label="Emergency Phone Number"
                type="tel"
                value={Ephone}
                placeholder="e.g. +1 234 567 890"
                error={EphoneError}
                onChange={(e) => {
                  const value = e.target.value;
                  const phoneRegex = /^\+?[1-9]\d{1,14}$/; // E.164 format (international)
                  setEPhone(value);

                  if (!value.match(phoneRegex)) {
                    setEPhoneError(true);
                  } else {
                    setEPhoneError(false);
                  }
                }}
              />
              {EphoneError && (
                <div className="text-StrawberryRed text-sm">Please enter a valid phone number.</div>
              )}

              <InputField
                label="Any Medical Conditions (if applicable)"
                type="text"
                value={med}
                placeholder="e.g. Diabetes, Asthma"
                error={medError}
                onChange={(e) => {
                  setMed(e.target.value);
                  setMedError(false);
                }}
              />

              <div className="w-full mt-5 flex justify-between items-center">
                <button
                  onClick={() => setActiveStep(2)}
                  className="text-CoolGray font-bold"
                >
                  Go Back
                </button>
                <button
                  className="text-white bg-MarineBlue active:scale-95 hover:bg-PurplishBlue font-bold px-5 py-2 rounded-lg"
                  onClick={() => {
                    if (!Ephone || EphoneError || !healthDeclaration) {
                      toast.error("Please fill out all health and emergency fields correctly.");
                      return;
                    }
                    calculateTotal();
                    setActiveStep(4);
                    setShowFinalModal(true);
                    toast.success("Step 3 completed.");
                  }}
                >
                  Next Step
                </button>
              </div>
            </div>
          )}

          {/* Step 4: Dashboard Modal Only */}
          {activeStep === 4 && showFinalModal && (
            <Dashboard
              name={name}
              email={email}
              phone={phone}
              dob={dob}
              dep={dep}
              ret={ret}
              Ephone={Ephone}
              healthdeclaration={healthDeclaration}
              request={request}
              accommodation={accommodation}
              nationality={nationality}
              med={med}
            />
          )}

          {/* -------------------Exit Button-------------------- */}
          {showFinalModal && (
            <div className="flex justify-center">
            <button
              className="bg-MarineBlue rounded-xl hover:bg-PurplishBlue active:scale-95 text-white px-5 py-2"
              onClick={() => {
                resetForm();         
                toast.success("Form submitted successfully!");
                navigate("/");       
              }}
            >
              Confirm and Submit
            </button>
          </div>
          )}
        </div>
      </div>
    </div>
  );
};

// Reusable input component
const InputField = ({ label, type, value, placeholder, error, onChange }) => (
  <div className="flex flex-col gap-1">
    <label className="text-sm text-MarineBlue">{label}</label>
    <input
      type={type}
      value={value}
      placeholder={placeholder}
      className={`rounded-lg border-2 px-4 py-2 ${error ? "border-StrawberryRed" : "border-LightGray"} transition duration-300 ease-in-out`}
      onChange={onChange}
    />
    {error && <div className="text-StrawberryRed text-sm">This field is required</div>}
  </div>
);

InputField.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  error: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
};


// Reusable select component
const SelectField = ({ label, value, error, onChange, options }) => (
  <div className="flex flex-col gap-1">
    <label className="text-sm text-MarineBlue">{label}</label>
    <select
      value={value}
      onChange={onChange}
      className={`rounded-lg border-2 px-4 py-2 ${error ? "border-StrawberryRed" : "border-LightGray"} transition duration-300 ease-in-out`}
    >
      <option value="" disabled>Select an option</option>
      {options.map((option) => (
        <option key={option} value={option}>{option}</option>
      ))}
    </select>
    {error && <div className="text-StrawberryRed text-sm">This field is required</div>}
  </div>
);

SelectField.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  error: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Register;
