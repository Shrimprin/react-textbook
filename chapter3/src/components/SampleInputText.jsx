const handleChange = (e) => {
  console.log(e.target.value);
};

export default function SampleInputText() {
  return <input type="text" defaultValue="" onChange={handleChange} />;
}
