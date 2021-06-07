export default function Projects() {
  const cursor = document.querySelector(`.custom-cursor`);
  document.addEventListener("mousemove", (e) => {
    cursor.setAttribute(
      "style",
      "top: " + e.pageY + "px; left:" + e.pageX + "px;"
    );
  });

  return (
    <>
      <h2 className="custom-cursor">Projects</h2>
      <div className="d-flex"></div>
    </>
  );
}
