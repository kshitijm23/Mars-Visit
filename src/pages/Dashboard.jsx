import PropTypes from "prop-types";

const Dashboard = ({
  name,
  email,
  phone,
  nationality,
  dob,
  accommodation,
  
  healthdeclaration,
  Ephone,
  med,
}) => {
  return (
    <div className="text-black bg-white px-10 py-5 rounded-xl">
      <h1 className="text-2xl font-bold mb-4">Please check your data before submission</h1>
      <p className="mb-2">
        <span className="font-bold me-3">Name:</span> {name}
      </p>
      <p className="mb-2">
        <span className="font-bold me-3">Email:</span> {email}
      </p>
      <p className="mb-2">
        <span className="font-bold me-3">Phone:</span> {phone}
      </p>
      <p className="mb-2">
        <span className="font-bold me-3">Nationality:</span> {nationality}
      </p>
      <p className="mb-2">
        <span className="font-bold me-3">DoB:</span> {dob}
      </p>
      <p className="mb-2">
        <span className="font-bold me-3">Accomodation:</span> {accommodation}
      </p>
      <p className="mb-2">
        <span className="font-bold me-3">Health Declaration:</span> {healthdeclaration}
      </p>
      
      <p className="mb-2">
        <span className="font-bold me-3">Emergency Contact:</span> {Ephone}
      </p>
      <p className="mb-2">
        <span className="font-bold me-3">Medical Emergency:</span> {med}
      </p>
      
    </div>
  );
};

Dashboard.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  nationality: PropTypes.string.isRequired,
  dob: PropTypes.string.isRequired,
  plan: PropTypes.string.isRequired,
  payment: PropTypes.string.isRequired,
  onlineService: PropTypes.bool.isRequired,
  largeStorage: PropTypes.bool.isRequired,
  customizableProfile: PropTypes.bool.isRequired,
  total: PropTypes.string.isRequired,
  accommodation: PropTypes.string.isRequired,
  healthdeclaration: PropTypes.bool.isRequired,
  Ephone: PropTypes.string.isRequired,
  med: PropTypes.string.isRequired,
};

export default Dashboard;
