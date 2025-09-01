import style from "./bikeSiteArea.module.css";

export default function BikeSiteArea({
  areas,
  searchTerm,
  setSearchTerm,
  selectedSareas,
  setSelectedSareas,
}) {
  const uniqueSareas = Array.from(
    new Set(areas.map((item) => item.sarea))
  ).sort();

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    if (value === "selectAll") {
      if (checked) {
        setSelectedSareas(uniqueSareas);
      } else {
        setSelectedSareas([]);
      }
    } else {
      if (checked) {
        setSelectedSareas((prevSelectedSareas) => [
          ...prevSelectedSareas,
          value,
        ]);
      } else {
        setSelectedSareas((prevSelectedSareas) =>
          prevSelectedSareas.filter((sarea) => sarea !== value)
        );
      }
    }
  };

  return (
    <div className={style.nav}>
      <div className={style.left}>
        <h2 className={style.h2}>站點資訊</h2>
        <select name="" id="" className={style.select}>
          <option value="">台北市</option>
        </select>
        <input
          type="text"
          className={style.input}
          placeholder="搜尋站點"
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <div className={style.chechbox}>
          <div className={style.selectAllContainer}>
            <label htmlFor="selectAll">
              <input
                type="checkbox"
                id="selectAll"
                name="selectAll"
                onChange={handleCheckboxChange}
                checked={
                  selectedSareas.length === uniqueSareas.length &&
                  uniqueSareas.length > 0
                }
                value="selectAll"
              />
              全部勾選
            </label>
          </div>
          {uniqueSareas.map((sarea) => (
            <label htmlFor={sarea} key={sarea}>
              <input
                type="checkbox"
                id={sarea}
                name={sarea}
                value={sarea}
                onChange={handleCheckboxChange}
                checked={selectedSareas.includes(sarea)}
              />
              {sarea}
            </label>
          ))}
        </div>
      </div>
      <div className={style.right}>
        <img src="/bike.png" alt="bike" />
      </div>
    </div>
  );
}
