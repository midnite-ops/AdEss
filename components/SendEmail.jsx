import { useState, useEffect } from "react";

const SendEmail = ({ formData, setFormData }) => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!success) return;

    const timer = setTimeout(() => {
      setSuccess(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, [success]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError("");
    setSuccess(false);

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to send email.");
      }

      setSuccess(true);

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "An unexpected error occurred.",
      );
    } finally {
      setLoading(false);
    }
  };
  return (
    <div>
      <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
        <label htmlFor="email" className="flex flex-col gap-3 ">
          Email
          <input
            type="email"
            value={formData.email}
            required
            name="email"
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className="border  border-black w-full py-3 px-4"
            placeholder="Your email"
          />
        </label>

        <label htmlFor="message" className="flex flex-col gap-3 ">
          Message
          <textarea
            name="message"
            value={formData.message}
            required
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
            className="border  border-black w-full py-3 px-4 resize-none"
            placeholder="Your message"
            rows={4}
          />
        </label>

        {error && (
          <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-800">
            ❌ {error}
          </div>
        )}
        <button type="submit" disabled={loading} className="edge-button">
          {success
            ? "Message sent successfully!"
            : loading
              ? "Sending..."
              : "Send Message"}
        </button>
      </form>
    </div>
  );
};

export default SendEmail;
