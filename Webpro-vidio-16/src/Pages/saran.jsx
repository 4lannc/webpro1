import AuthLayout from "../Component/Layout/AuthLayouts";
import FormSaran from "../Component/Fragment/FormSaran";

const SaranPage = () => {
  return (
    <AuthLayout title="Keluhan & Saran" type="saran">
      <FormSaran />
    </AuthLayout>
  );
};

export default SaranPage;
