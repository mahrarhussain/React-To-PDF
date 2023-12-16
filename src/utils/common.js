import jsPDF from "jspdf";
import { toast } from "react-toastify";

const generateFields = (user) => [
  { label: "Name", value: user.name },
  { label: "Email", value: user.email },
  { label: "Phone", value: user.phone },
  { label: "Address", value: user.address },
  { label: "Company", value: user.company },
];

export const handleDownload = (user) => {
  const pdf = new jsPDF();

  const fields = generateFields(user);

  fields.forEach(({ label, value }, index) => {
    pdf.text(20, 20 + index * 10, `${label}: ${value}`);
  });

  const pdfData = pdf.output("blob");
  const pdfUrl = URL.createObjectURL(pdfData);

  const downloadLink = document.createElement("a");
  downloadLink.href = pdfUrl;
  downloadLink.download = "user_data.pdf";
  downloadLink.click();

  toast.success("Downloaded Successfully.!");
};
