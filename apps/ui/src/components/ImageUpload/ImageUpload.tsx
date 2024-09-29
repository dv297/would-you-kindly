import { useRef, useState } from "react";

import { Button } from "@/components/ui/button.tsx";

interface Props {
  onImageUploaded: (cid: string) => void;
}
const ImageUpload = (props: Props) => {
  const { onImageUploaded } = props;
  const [preview, setPreview] = useState(null);
  const imgRef = useRef();
  const handleChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
      imgRef.current = file;
    }
  };

  const JWT =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiI5OWYwM2VhYS0zZDMyLTRlZTctOGMxZi02MWJjMmE1ZjU0NjQiLCJlbWFpbCI6Imx0YmFsbGFyZWpvbmVzNzhAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsInBpbl9wb2xpY3kiOnsicmVnaW9ucyI6W3siZGVzaXJlZFJlcGxpY2F0aW9uQ291bnQiOjEsImlkIjoiRlJBMSJ9LHsiZGVzaXJlZFJlcGxpY2F0aW9uQ291bnQiOjEsImlkIjoiTllDMSJ9XSwidmVyc2lvbiI6MX0sIm1mYV9lbmFibGVkIjpmYWxzZSwic3RhdHVzIjoiQUNUSVZFIn0sImF1dGhlbnRpY2F0aW9uVHlwZSI6InNjb3BlZEtleSIsInNjb3BlZEtleUtleSI6IjUzM2I0MGQ5ZDVkNWZlMTMxN2I0Iiwic2NvcGVkS2V5U2VjcmV0IjoiMzE4ZWVlOGQxN2UzYzA2YmY1MGQyODY0MmZkODRjNzhhY2M1ODZiYTA1NzdkNWQxZWJlZWU4MjFhM2M5OGI4OSIsImV4cCI6MTc1OTEyMDI0NH0.wlfJat9d2dZaesAi3zApLXDJRAzAsi-URJJSBCqYQB8";
  async function pinFileToIPFS(img) {
    try {
      const formData = new FormData();
      const file = new File([img], img.name, { type: img.type });
      formData.append("file", file);

      const request = await fetch("https://uploads.pinata.cloud/v3/files", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${JWT}`,
        },
        body: formData,
      });
      const response = await request.json();
      onImageUploaded(response.data.cid);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  const handleSubmit = (event) => {
    const file = imgRef.current;
    event.preventDefault();
    pinFileToIPFS(file).then();
  };

  return (
    <div>
      <form>
        <input type="file" accept="image/*" onChange={handleChange} />
        <Button onClick={handleSubmit}>Upload</Button>
      </form>
      {preview && (
        <div>
          <h3>Image Preview:</h3>
          <img
            src={preview}
            alt="Preview"
            style={{ maxWidth: "300px", maxHeight: "300px" }}
          />
        </div>
      )}
    </div>
  );
};

export default ImageUpload;
