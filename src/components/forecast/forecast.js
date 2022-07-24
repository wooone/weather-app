import { Accordion, AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel } from "react-accessible-accordion";
import './forecast.css'

const WEEK_DAYS = ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期日'];

const Forecast = ({ data }) => {
	const dayInAWeek = new Date().getDay();
	const forecastDay = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(WEEK_DAYS.slice(0, dayInAWeek));


	return (
		<>
			<label className="title">一週預報</label>
			<Accordion allowZeroExpanded>
				{data.list.splice(0, 7).map((item, idx) => (
					<AccordionItem key={idx}>
						<AccordionItemHeading>
							<AccordionItemButton>
								<div className="daily-item">
									<img alt="weather" className="icon-small" src={`icons/${item.weather[0].icon}.png`}/>
									<label className="day">{forecastDay[idx]}</label>
									<label className="description">{item.weather[0].description}</label>
									<label className="min-max">{Math.round(item.main.temp_min)}°C / {Math.round(item.main.temp_max)}°C</label>
								</div>
							</AccordionItemButton>
						</AccordionItemHeading>
						<AccordionItemPanel>
							<div className="daily-details-grid">
								<div className="daily-details-grid-item">
									<label>氣壓</label>
									<label>{item.main.pressure} 百帕</label>
								</div>
								<div className="daily-details-grid-item">
									<label>濕度</label>
									<label>{item.main.humidity} %</label>
								</div>
								<div className="daily-details-grid-item">
									<label>降雨機率</label>
									<label>{item.clouds.all} %</label>
								</div>
								<div className="daily-details-grid-item">
									<label>風速</label>
									<label>{item.wind.speed} m/s</label>
								</div>
								<div className="daily-details-grid-item">
									<label>海平面</label>
									<label>{item.main.sea_level} m</label>
								</div>
								<div className="daily-details-grid-item">
									<label>體感溫度</label>
									<label>{Math.round(item.main.feels_like)} °C</label>
								</div>
							</div>
						</AccordionItemPanel>
					</AccordionItem>
				))}
			</Accordion>
		</>
	);
};

export default Forecast;