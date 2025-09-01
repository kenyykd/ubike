import style from "./stationInfoTable.module.css";

export default function StationInfoTable({ datas }) {
  return (
    <div className={style.nav}>
      <table className={style.tables}>
        <thead>
          <tr>
            <th>縣市</th>
            <th>區域</th>
            <th>站點名稱</th>
            <th className={style.desktopOnly}>可借車輛</th>
            <th className={style.desktopOnly}>可還空位</th>
          </tr>
        </thead>
        <tbody>
          {datas.map((data, index) => (
            <tr key={index}>
              <td>台北市</td>
              <td>{data.sarea}</td>
              <td>{data.sna.replace("YouBike2.0_", "")}</td>
              <td className={style.desktopOnly}>{data.available_rent_bikes}</td>
              <td className={style.desktopOnly}>
                {data.available_return_bikes}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
