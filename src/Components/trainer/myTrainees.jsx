import React, { useEffect } from 'react';
import style from '../../assets/css/chat1.module.css';
import photo from '../../images/profile.jpg';

function MyTrainees(props) {
	useEffect(() => {
		const slider = document.querySelector('.inner_slider');
		const sliderImages = document.querySelectorAll('.inner_slider img');
		const month = document.querySelector('.month');

		const mainSlider = document.querySelector('.main_slider');

		const leftSlider = document.querySelector('.slider');
		const leftSliderImgs = document.querySelectorAll('.slider img');

		//Buttons
		const prevBtn = document.querySelector('.carousel-control-prev');
		const nextBtn = document.querySelector('.carousel-control-next');

		const backBtn = document.querySelector('.arrow_back');
		const forwardBtn = document.querySelector('.arrow_forward');

		const upBtn = document.querySelector('.arrow_up');
		const downBtn = document.querySelector('.arrow_down');

		let counter = 1;
		const size = 350;

		let mainCounter = 1;
		const mainSize = 1000;

		let leftCounter = 1;
		const leftSize = 80;

		slider.style.transform = 'translateX(' + -size * counter + 'px)';
		mainSlider.style.transform = 'translateX(' + -mainSize * mainCounter + 'px)';
		leftSlider.style.transform = 'translatey(' + -leftSize * leftCounter + 'px)';

		nextBtn.addEventListener('click', () => {
			if (counter == sliderImages.length - 1) return;
			slider.style.transition = 'transform 0.4s ease-in-out';
			counter++;
			slider.style.transform = 'translateX(' + -size * counter + 'px)';
			month.innerHTML = `month ${counter + 1}`;
		});

		prevBtn.addEventListener('click', () => {
			if (counter <= 0) return;
			slider.style.transition = 'transform 0.4s ease-in-out';
			counter--;
			slider.style.transform = 'translateX(' + -size * counter + 'px)';
			month.innerHTML = `month ${counter + 1}`;
		});

		forwardBtn.addEventListener('click', () => {
			console.log('clicked');
			if (mainCounter == 2) return;
			mainSlider.style.transition = 'transform 0.4s ease-in-out';
			mainCounter++;
			mainSlider.style.transform = 'translateX(' + -mainSize * mainCounter + 'px)';
		});
		backBtn.addEventListener('click', () => {
			console.log('clicked');
			if (mainCounter <= 0) return;
			mainSlider.style.transition = 'transform 0.4s ease-in-out';
			mainCounter--;
			mainSlider.style.transform = 'translateX(' + -mainSize * mainCounter + 'px)';
		});

		downBtn.addEventListener('click', () => {
			if (leftCounter == leftSliderImgs.length - 5) return;
			leftSlider.style.transition = 'transform 0.4s ease-in-out';
			leftCounter++;
			leftSlider.style.transform = 'translateY(' + -leftSize * leftCounter + 'px)';
		});
		upBtn.addEventListener('click', () => {
			if (leftCounter <= 0) return;
			leftSlider.style.transition = 'transform 0.4s ease-in-out';
			leftCounter--;
			leftSlider.style.transform = 'translateY(' + -leftSize * leftCounter + 'px)';
		});
	}, []);

	return (
		<div className={style.body}>
			<div className={style.left_side}>
				<div className={style.left_slider}>
					<div className={` slider ${style.slider}`}>
						<img src={photo} alt="saas" />
						<img src={photo} alt="saas" />
						<img src={photo} alt="saas" />
						<img src={photo} alt="saas" />
						<img src={photo} alt="saas" />
						<img src={photo} alt="saas" />
						<img src={photo} alt="saas" />
						<img src={photo} alt="saas" />
						<img src={photo} alt="saas" />
						<img src={photo} alt="saas" />
						<img src={photo} alt="saas" />
						<img src={photo} alt="saas" />
					</div>
				</div>
				<i className={`material-icons arrow_up ${style.arrows} ${style.arrow_up}`}>keyboard_arrow_up</i>
				<i className={`material-icons arrow_down ${style.arrows} ${style.arrow_down}`}>keyboard_arrow_down</i>
			</div>

			<section className={style.comparison}>
				<div className={style.container}>
					<div className={style.profile}>
						<img src={photo} className={style.profile__img} />
						<h3 className={style.profile__name}>Kyrillos Hany</h3>
					</div>

					<div className={style.outer_slider}>
						<div className={` main_slider ${style.main_slider}`}>
							<div className={style.slide_one}>
								<div className={style.slider_card}>
									<div className={`inner_slider ${style.inner_slider}`}>
										<div>
											<img src={photo} alt="" />
										</div>
										<div>
											<img src={photo} alt="" />
										</div>
										<div>
											<img src={photo} alt="" />
										</div>
									</div>
									<div className={`month ${style.month}`}>Month 1</div>
								</div>
								<a className={` carousel-control-prev ${style.carousel_control_prev}`}>
									<span
										className={`carousel-control-prev-icon ${style.carousel_control_prev_icon}`}
									/>
								</a>
								<a className={`carousel-control-next ${style.carousel_control_next}`}>
									<span
										className={`carousel-control-next-icon ${style.carousel_control_next_icon}`}
									/>
								</a>
							</div>

							<div className={style.slide_two}>
								<table className={style.table}>
									<thead>
										<th />
										<th>saturday</th>
										<th>sunday</th>
										<th>monday</th>
										<th>tuesday</th>
										<th>wednesday</th>
										<th>thursday</th>
										<th>friday</th>
									</thead>
									<tbody>
										<tr>
											<td>8 Am</td>
											<td data-label />
											<td data-label />
											<td data-label />
											<td data-label />
											<td data-label />
											<td data-label />
											<td data-label />
										</tr>

										<tr>
											<td>11 Am</td>
											<td data-label />
											<td data-label />
											<td data-label />
											<td data-label />
											<td data-label />
											<td data-label />
											<td data-label />
										</tr>

										<tr>
											<td>3 Pm</td>
											<td data-label />
											<td data-label />
											<td data-label />
											<td data-label />
											<td data-label />
											<td data-label />
											<td data-label />
										</tr>

										<tr>
											<td>5 Pm</td>
											<td data-label />
											<td data-label />
											<td data-label />
											<td data-label />
											<td data-label />
											<td data-label />
											<td data-label />
										</tr>

										<tr>
											<td>7 Pm</td>
											<td data-label />
											<td data-label />
											<td data-label />
											<td data-label />
											<td data-label />
											<td data-label />
											<td data-label />
										</tr>
									</tbody>
								</table>
							</div>
							<div className={style.slide_three}>
								<h1>Copy Graph Here</h1>
							</div>
						</div>
						<div>
							<i className={`material-icons arrow_back ${style.arrow} ${style.arrow_back}`}>arrow_back</i>
							<i className={`material-icons arrow_forward ${style.arrow} ${style.arrow_forward}`}>
								arrow_forward
							</i>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}

export default MyTrainees;
