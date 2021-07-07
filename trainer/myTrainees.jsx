// import axios from 'axios';
// // import React, { useEffect, useState } from "react";
// import style from '../../assets/css/chat1.module.css';
// import photo from '../../images/profile.jpg';
// import React, { useEffect, useState, useRef, useContext } from 'react';
// import s from '../../Pages/Profile/Profile.module.css';
// import add from '../../images/add.png';
// import line from '../../images/svg/line.svg';
// // import axios from "axios";
// import moment from 'moment';
// import Alert from '@material-ui/lab/Alert';
// import Spinner from '../../UI/Spinner/Spinner';
// import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
// import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
// import LineChart from '../../Components/chartjs';
// import TraineeCard from '../../Components/TraineeCard';
// import TrainerCard from '../../Components/TrainerCard';
// import style2 from '../../assets/css/navbar.module.css';
// import AlertContext from '../../context/alerts-context';
// import _ from 'lodash';
// import ProfileModal from '../../UI/ProfileModal/ProfileModal';
// function generateRanges(startDate, endDate) {
// 	let current = moment(startDate, 'DD/MM/YYYY');
// 	const end = moment(endDate, 'DD/MM/YYYY');
// 	let weeks = [];
// 	while (current < end) {
// 		let l = current.add(7, 'days');
// 		weeks = [ ...weeks, l.format('YYYY-MM-DD') ];
// 	}
// 	return weeks;
// }

// function MyTrainees(props) {
// 	const [ trainees, setTrainees ] = useState([]);
// 	//   const [current,setCurrent]=useState({})
// 	const [ current1, setCurrent1 ] = useState({});
// 	const [ profile, setProfile ] = useState({});

// 	useEffect(() => {
// 		axios
// 			.get('fetch-approved')
// 			.then((res) => {
// 				console.log(res.data.docs);
// 				setTrainees(res.data.docs);
// 			})
// 			.catch((err) => {
// 				console.log(err);
// 			});
// 	}, []);

// 	console.log(current1);

// 	useEffect(() => {
// 		const slider = document.querySelector('.inner_slider');
// 		const sliderImages = document.querySelectorAll('.inner_slider img');
// 		const month = document.querySelector('.month');

// 		const mainSlider = document.querySelector('.main_slider');

// 		const leftSlider = document.querySelector('.slider');
// 		const leftSliderImgs = document.querySelectorAll('.slider img');
// 		//
// 		//Buttons
// 		const prevBtn = document.querySelector('.carousel-control-prev');
// 		const nextBtn = document.querySelector('.carousel-control-next');

// 		const backBtn = document.querySelector('.arrow_back');
// 		const forwardBtn = document.querySelector('.arrow_forward');

// 		const upBtn = document.querySelector('.arrow_up');
// 		const downBtn = document.querySelector('.arrow_down');

// 		let counter = 1;
// 		const size = 350;

// 		let mainCounter = 1;
// 		const mainSize = 1000;

// 		let leftCounter = 1;
// 		const leftSize = 80;

// 		slider.style.transform = 'translateX(' + -size * counter + 'px)';
// 		mainSlider.style.transform = 'translateX(' + -mainSize * mainCounter + 'px)';
// 		leftSlider.style.transform = 'translatey(' + -leftSize * leftCounter + 'px)';

// 		nextBtn.addEventListener('click', () => {
// 			if (counter == sliderImages.length - 1) return;
// 			slider.style.transition = 'transform 0.4s ease-in-out';
// 			counter++;
// 			slider.style.transform = 'translateX(' + -size * counter + 'px)';
// 			month.innerHTML = `month ${counter + 1}`;
// 		});

// 		prevBtn.addEventListener('click', () => {
// 			if (counter <= 0) return;
// 			slider.style.transition = 'transform 0.4s ease-in-out';
// 			counter--;
// 			slider.style.transform = 'translateX(' + -size * counter + 'px)';
// 			month.innerHTML = `month ${counter + 1}`;
// 		});

// 		forwardBtn.addEventListener('click', () => {
// 			console.log('clicked');
// 			if (mainCounter == 2) return;
// 			mainSlider.style.transition = 'transform 0.4s ease-in-out';
// 			mainCounter++;
// 			mainSlider.style.transform = 'translateX(' + -mainSize * mainCounter + 'px)';
// 		});
// 		backBtn.addEventListener('click', () => {
// 			console.log('clicked');
// 			if (mainCounter <= 0) return;
// 			mainSlider.style.transition = 'transform 0.4s ease-in-out';
// 			mainCounter--;
// 			mainSlider.style.transform = 'translateX(' + -mainSize * mainCounter + 'px)';
// 		});

// 		downBtn.addEventListener('click', () => {
// 			if (leftCounter == leftSliderImgs.length - 4) return;
// 			leftSlider.style.transition = 'transform 0.4s ease-in-out';
// 			leftCounter++;
// 			leftSlider.style.transform = 'translateY(' + -leftSize * leftCounter + 'px)';
// 		});
// 		upBtn.addEventListener('click', () => {
// 			if (leftCounter <= 0) return;
// 			leftSlider.style.transition = 'transform 0.4s ease-in-out';
// 			leftCounter--;
// 			leftSlider.style.transform = 'translateY(' + -leftSize * leftCounter + 'px)';
// 		});
// 	}, []);

// 	//   useEffect(()=>{

// 	//   },[current1])

// 	////////logek
// 	//   const [profile, setProfile] = useState();
// 	const imga = useRef();
// 	const labe = useRef();
// 	const alert = useRef();

// 	const [ loading, setLoading ] = useState(false);
// 	const [ loading2, setLoading2 ] = useState(false);
// 	// const [loading3, setLoading3] = useState(false);

// 	const [ update, setUpdate ] = useState();
// 	const [ system, setSystem ] = useState();
// 	const [ dates, setDates ] = useState([]);

// 	const [ current, setCurrent ] = useState('');

// 	const [ weeks, setWeeks ] = useState([]);
// 	const [ weekIndex, setWeekIndex ] = useState(0);

// 	const [ currentWeekWeight, setCurrentWeekWeight ] = useState([]);
// 	const [ currentWeekPerfectPath, setCurrentWeekPerfectPath ] = useState([]);

// 	//   const [trainees, setTraineees] = useState([]);
// 	//   const [trainers, setTrainers] = useState([]);

// 	//   const [open, setOpen] = useState(false);

// 	//   const openModal = () => {
// 	//     setOpen(true);
// 	//   };
// 	//   const closeModal = () => {
// 	//     setOpen(false);
// 	//   };

// 	const alers = useContext(AlertContext);

// 	//   const al = _.find(
// 	//     alers.alerts,
// 	//     _.matchesProperty("user", {
// 	//       id: profile ? profile.id : "",
// 	//       username: profile ? profile.username : "",
// 	//       photo: profile ? profile.photo : "",
// 	//       role: profile ? profile.role : "",
// 	//     })
// 	//   );

// 	useEffect(
// 		() => {
// 			console.log(current1.id);
// 			axios
// 				.get(`fetch-profile?id=${current1.id}`)
// 				.then((res) => {
// 					// console.log(res);
// 					console.log(res.data);
// 					setProfile(res.data.user);
// 					setSystem(res.data.system);
// 					let newWeeks = generateRanges(
// 						moment(res.data.system.perfectPathes[0].date).format('DD/MM/YYYY'),
// 						moment(res.data.system.perfectPathes[res.data.system.perfectPathes.length - 1].date).format(
// 							'DD/MM/YYYY'
// 						)
// 					);
// 					setWeeks(newWeeks);
// 					if (weekIndex === 0) {
// 						if (weekIndex + 1 !== newWeeks.length) {
// 							let ws = [];
// 							let pws = [];
// 							res.data.user.weights.map((w) => {
// 								if (
// 									moment(w.date).isBetween(
// 										moment(newWeeks[weekIndex]),
// 										moment(newWeeks[weekIndex + 1])
// 									)
// 								) {
// 									return ws.push(w.weight);
// 								}
// 							});
// 							setCurrentWeekWeight(ws);
// 							res.data.system.perfectPathes.map((w) => {
// 								if (
// 									moment(w.date).isBetween(
// 										moment(newWeeks[weekIndex]),
// 										moment(newWeeks[weekIndex + 1])
// 									)
// 								)
// 									return pws.push(w.weight);
// 							});
// 							setCurrentWeekPerfectPath(pws);
// 						}
// 					}
// 				})
// 				.catch((err) => {
// 					console.error(err);
// 				});

// 			axios
// 				.get(`getDates?id=${current1.id}`)
// 				.then((res) => {
// 					setDates(res.data.syst);
// 					setCurrent(res.data.syst[0].date);
// 				})
// 				.catch((err) => {
// 					console.error(err);
// 				});
// 		},
// 		[ loading, loading2, current1.id ]
// 	);

// 	//   useEffect(() => {
// 	//     axios.get("/getUsers?limit=3").then((res) => {
// 	//       setTraineees(res.data.docs);
// 	//     });
// 	//     axios.get("/fetch-gyms?limit=3").then((res) => {
// 	//       setTrainers(res.data.docs);
// 	//     });
// 	//   }, []);

// 	//   const updateHandler = async (info) => {
// 	//     await axios.post("/updateInfo", info);
// 	//     // console.log(res);
// 	//     setLoading2(true);
// 	//     setLoading2(false);
// 	//   };

// 	const leftToggle = () => {
// 		if (system) {
// 			var indexOfStevie = dates.findIndex((i) => i.date === current);
// 			if (indexOfStevie !== 0) {
// 				setCurrent(dates[indexOfStevie - 1].date);
// 				axios
// 					.get(
// 						props.match.params.id
// 							? `getSystemByDate?date=${current}&&id=${props.match.params.id}`
// 							: `getSystemByDate?date=${current}`
// 					)
// 					.then((res) => {
// 						setSystem(res.data);
// 					})
// 					.catch((err) => {
// 						console.error(err);
// 					});
// 			}
// 		}
// 	};

// 	const rightToggle = () => {
// 		if (system) {
// 			var indexOfStevie = dates.findIndex((i) => i.date === current);
// 			if (indexOfStevie !== dates.length - 1) {
// 				setCurrent(dates[indexOfStevie + 1].date);
// 				axios
// 					.get(`getSystemByDate?date=${current}&&id=${current1.id}`)
// 					.then((res) => {
// 						setSystem(res.data);
// 					})
// 					.catch((err) => {
// 						console.error(err);
// 					});
// 			}
// 		}
// 	};

// 	const leftToggleChart = () => {
// 		if (system)
// 			if (weekIndex - 1 !== -1) {
// 				let ws = [];
// 				let pws = [];
// 				profile.weights.map((w) => {
// 					if (moment(w.date).isBetween(moment(weeks[weekIndex - 1]), moment(weeks[weekIndex])))
// 						ws.push(w.weight);
// 				});
// 				setCurrentWeekWeight(ws);
// 				system.perfectPathes.map((w) => {
// 					if (moment(w.date).isBetween(moment(weeks[weekIndex - 1]), moment(weeks[weekIndex])))
// 						pws.push(w.weight);
// 				});
// 				setCurrentWeekPerfectPath(pws);
// 				let nextWeek = weekIndex - 1;

// 				setWeekIndex(nextWeek);
// 			}
// 	};

// 	const rightToggleChart = () => {
// 		if (system)
// 			if (weekIndex + 1 !== weeks.length) {
// 				let ws = [];
// 				let pws = [];
// 				profile.weights.map((w) => {
// 					if (moment(w.date).isBetween(moment(weeks[weekIndex + 1]), moment(weeks[weekIndex + 2])))
// 						ws.push(w.weight);
// 				});
// 				setCurrentWeekWeight(ws);
// 				system.perfectPathes.map((w) => {
// 					if (moment(w.date).isBetween(moment(weeks[weekIndex + 1]), moment(weeks[weekIndex + 2])))
// 						pws.push(w.weight);
// 				});
// 				setCurrentWeekPerfectPath(pws);
// 				let nextWeek = weekIndex + 1;
// 				setWeekIndex(nextWeek);
// 			}
// 	};

// 	return (
// 		<div className={style.body}>
// 			<div className={style.left_side}>
// 				<div className={style.left_slider}>
// 					<div className={` slider ${style.slider}`}>
// 						{trainees &&
// 							trainees.map((t) => {
// 								return (
// 									<img
// 										key={t.id}
// 										id={t.id}
// 										src={t.user.photo}
// 										alt={t.id}
// 										onClick={() => setCurrent1(t.user)}
// 									/>
// 								);
// 							})}
// 					</div>
// 				</div>
// 				<i className={`material-icons arrow_up ${style.arrows} ${style.arrow_up}`}>keyboard_arrow_up</i>
// 				<i className={`material-icons arrow_down ${style.arrows} ${style.arrow_down}`}>keyboard_arrow_down</i>
// 			</div>
// 			<section className={style.comparison}>
// 				<div className={style.container}>
// 					<div className={style.profile}>
// 						<img src={photo} className={style.profile__img} />
// 						<h3 className={style.profile__name}>Kyrillos Hany</h3>
// 					</div>

// 					<div className={style.outer_slider}>
// 						<div className={` main_slider ${style.main_slider}`}>
// 							<div className={style.slide_one}>
// 								<div className={style.slider_card}>
// 									<div className={`inner_slider ${style.inner_slider}`}>
// 										{profile ? profile.images ? profile.images.length > 0 ? (
// 											profile.images.map((i, index) => {
// 												return (
// 													<div key={index}>
// 														<img src={i.image} alt={index} />
// 													</div>
// 												);
// 											})
// 										) : (
// 											''
// 										) : (
// 											''
// 										) : (
// 											''
// 										)}

// 										{/* <div>
//                       <img src={photo} alt="" />
//                     </div>
//                     <div>
//                       <img src={photo} alt="" />
//                     </div> */}
// 									</div>
// 									<div className={`month ${style.month}`}>Month 1</div>
// 								</div>
// 								<a className={` carousel-control-prev ${style.carousel_control_prev}`}>
// 									<span
// 										className={`carousel-control-prev-icon ${style.carousel_control_prev_icon}`}
// 									/>
// 								</a>
// 								<a className={`carousel-control-next ${style.carousel_control_next}`}>
// 									<span
// 										className={`carousel-control-next-icon ${style.carousel_control_next_icon}`}
// 									/>
// 								</a>
// 							</div>

// 							<div className={style.slide_two}>
// 								<div
// 									style={{
// 										textAlign: 'center',
// 										margin: '10px 0px',
// 										display: 'flex',
// 										justifyContent: 'center'
// 									}}
// 								>
// 									<div style={{ cursor: 'pointer' }} onClick={() => leftToggle()}>
// 										{' '}
// 										<ArrowBackIosIcon />
// 									</div>
// 									<span> {moment(current).format('YYYY MM DD')} </span>
// 									<div style={{ cursor: 'pointer' }} onClick={() => rightToggle()}>
// 										{' '}
// 										<ArrowForwardIosIcon />
// 									</div>
// 								</div>
// 								<table className={style.table}>
// 									<thead>
// 										<th />
// 										<th>saturday</th>
// 										<th>sunday</th>
// 										<th>monday</th>
// 										<th>tuesday</th>
// 										<th>wednesday</th>
// 										<th>thursday</th>
// 										<th>friday</th>
// 									</thead>
// 									<tbody>
// 										<tr>
// 											<td>8 Am</td>
// 											<td
// 												data-label="Sat"
// 												onClick={(e) => {
// 													if (system)
// 														props.openHandler2(
// 															'/food',
// 															system.syst[0].system[0].sys[0],
// 															system.syst[0]._id,
// 															system.syst[0].system[0]._id,
// 															props.match.params.id
// 														);
// 												}}
// 											>
// 												{system ? (
// 													system.syst[0].system[0].sys[0].f.map((f) => f.food.food + ', ')
// 												) : (
// 													''
// 												)}
// 											</td>
// 											<td
// 												data-label="sun"
// 												onClick={(e) => {
// 													if (system)
// 														props.openHandler2(
// 															'/food',
// 															system.syst[0].system[1].sys[0],
// 															system.syst[0]._id,
// 															system.syst[0].system[1]._id,
// 															props.match.params.id
// 														);
// 												}}
// 											>
// 												{system ? (
// 													system.syst[0].system[1].sys[0].f.map((f) => f.food.food + ', ')
// 												) : (
// 													''
// 												)}
// 											</td>
// 											<td
// 												data-label="tuesday"
// 												onClick={(e) => {
// 													if (system)
// 														props.openHandler2(
// 															'/food',
// 															system.syst[0].system[2].sys[0],
// 															system.syst[0]._id,
// 															system.syst[0].system[2]._id,
// 															props.match.params.id
// 														);
// 												}}
// 											>
// 												{system ? (
// 													system.syst[0].system[2].sys[0].f.map((f) => f.food.food + ', ')
// 												) : (
// 													''
// 												)}
// 											</td>
// 											<td
// 												data-label="wednesday"
// 												onClick={(e) => {
// 													if (system)
// 														props.openHandler2(
// 															'/food',
// 															system.syst[0].system[3].sys[0],
// 															system.syst[0]._id,
// 															system.syst[0].system[3]._id,
// 															props.match.params.id
// 														);
// 												}}
// 											>
// 												{system ? (
// 													system.syst[0].system[3].sys[0].f.map((f) => f.food.food + ', ')
// 												) : (
// 													''
// 												)}
// 											</td>
// 											<td
// 												data-label="friday"
// 												onClick={(e) => {
// 													if (system)
// 														props.openHandler2(
// 															'/food',
// 															system.syst[0].system[4].sys[0],
// 															system.syst[0]._id,
// 															system.syst[0].system[4]._id,
// 															props.match.params.id
// 														);
// 												}}
// 											>
// 												{system ? (
// 													system.syst[0].system[4].sys[0].f.map((f) => f.food.food + ', ')
// 												) : (
// 													''
// 												)}
// 											</td>
// 											<td
// 												data-label="friday"
// 												onClick={(e) => {
// 													if (system)
// 														props.openHandler2(
// 															'/food',
// 															system.syst[0].system[5].sys[0],
// 															system.syst[0]._id,
// 															system.syst[0].system[5]._id,
// 															props.match.params.id
// 														);
// 												}}
// 											>
// 												{system ? (
// 													system.syst[0].system[5].sys[0].f.map((f) => f.food.food + ', ')
// 												) : (
// 													''
// 												)}
// 											</td>
// 											<td
// 												data-label="friday"
// 												onClick={(e) => {
// 													if (system)
// 														props.openHandler2(
// 															'/food',
// 															system.syst[0].system[6].sys[0],
// 															system.syst[0]._id,
// 															system.syst[0].system[6]._id,
// 															props.match.params.id
// 														);
// 												}}
// 											>
// 												{system ? (
// 													system.syst[0].system[6].sys[0].f.map((f) => f.food.food + ', ')
// 												) : (
// 													''
// 												)}
// 											</td>
// 										</tr>

// 										<tr>
// 											<td>11 Am</td>
// 											<td
// 												data-label="Sat"
// 												onClick={(e) => {
// 													if (system)
// 														props.openHandler2(
// 															'/food',
// 															system.syst[0].system[0].sys[1],
// 															system.syst[0]._id,
// 															system.syst[0].system[0]._id,
// 															props.match.params.id
// 														);
// 												}}
// 											>
// 												{system ? (
// 													system.syst[0].system[0].sys[1].f.map((f) => f.food.food + ', ')
// 												) : (
// 													''
// 												)}
// 											</td>
// 											<td
// 												data-label="sun"
// 												onClick={(e) => {
// 													if (system)
// 														props.openHandler2(
// 															'/food',
// 															system.syst[0].system[1].sys[1],
// 															system.syst[0]._id,
// 															system.syst[0].system[1]._id,
// 															props.match.params.id
// 														);
// 												}}
// 											>
// 												{system ? (
// 													system.syst[0].system[1].sys[1].f.map((f) => f.food.food + ', ')
// 												) : (
// 													''
// 												)}
// 											</td>
// 											<td
// 												data-label="tuesday"
// 												onClick={(e) => {
// 													if (system)
// 														props.openHandler2(
// 															'/food',
// 															system.syst[0].system[2].sys[1],
// 															system.syst[0]._id,
// 															system.syst[0].system[2]._id,
// 															props.match.params.id
// 														);
// 												}}
// 											>
// 												{system ? (
// 													system.syst[0].system[2].sys[1].f.map((f) => f.food.food + ', ')
// 												) : (
// 													''
// 												)}
// 											</td>
// 											<td
// 												data-label="wednesday"
// 												onClick={(e) => {
// 													if (system)
// 														props.openHandler2(
// 															'/food',
// 															system.syst[0].system[3].sys[1],
// 															system.syst[0]._id,
// 															system.syst[0].system[3]._id,
// 															props.match.params.id
// 														);
// 												}}
// 											>
// 												{system ? (
// 													system.syst[0].system[3].sys[1].f.map((f) => f.food.food + ', ')
// 												) : (
// 													''
// 												)}
// 											</td>
// 											<td
// 												data-label="friday"
// 												onClick={(e) => {
// 													if (system)
// 														props.openHandler2(
// 															'/food',
// 															system.syst[0].system[4].sys[1],
// 															system.syst[0].system[4]._id,
// 															system.syst[0].system[4]._id,
// 															props.match.params.id
// 														);
// 												}}
// 											>
// 												{system ? (
// 													system.syst[0].system[4].sys[1].f.map((f) => f.food.food + ', ')
// 												) : (
// 													''
// 												)}
// 											</td>
// 											<td
// 												data-label="friday"
// 												onClick={(e) => {
// 													if (system)
// 														props.openHandler2(
// 															'/food',
// 															system.syst[0].system[5].sys[1],
// 															system.syst[0]._id,
// 															system.syst[0].system[5]._id,
// 															props.match.params.id
// 														);
// 												}}
// 											>
// 												{system ? (
// 													system.syst[0].system[5].sys[1].f.map((f) => f.food.food + ', ')
// 												) : (
// 													''
// 												)}
// 											</td>
// 											<td
// 												data-label="friday"
// 												onClick={(e) => {
// 													if (system)
// 														props.openHandler2(
// 															'/food',
// 															system.syst[0].system[6].sys[1],
// 															system.syst[0]._id,
// 															system.syst[0].system[6]._id,
// 															props.match.params.id
// 														);
// 												}}
// 											>
// 												{system ? (
// 													system.syst[0].system[6].sys[1].f.map((f) => f.food.food + ', ')
// 												) : (
// 													''
// 												)}
// 											</td>
// 										</tr>

// 										<tr>
// 											<td>3 Pm</td>
// 											<td
// 												data-label="Sat"
// 												onClick={(e) => {
// 													if (system)
// 														props.openHandler2(
// 															'/food',
// 															system.syst[0].system[0].sys[2],
// 															system.syst[0]._id,
// 															system.syst[0].system[0]._id,
// 															props.match.params.id
// 														);
// 												}}
// 											>
// 												{system ? (
// 													system.syst[0].system[0].sys[2].f.map((f) => f.food.food + ', ')
// 												) : (
// 													''
// 												)}
// 											</td>
// 											<td
// 												data-label="sun"
// 												onClick={(e) => {
// 													if (system)
// 														props.openHandler2(
// 															'/food',
// 															system.syst[0].system[1].sys[2],
// 															system.syst[0]._id,
// 															system.syst[0].system[1]._id,
// 															props.match.params.id
// 														);
// 												}}
// 											>
// 												{system ? (
// 													system.syst[0].system[1].sys[2].f.map((f) => f.food.food + ', ')
// 												) : (
// 													''
// 												)}
// 											</td>
// 											<td
// 												data-label="tuesday"
// 												onClick={(e) => {
// 													if (system)
// 														props.openHandler2(
// 															'/food',
// 															system.syst[0].system[2].sys[2],
// 															system.syst[0]._id,
// 															system.syst[0].system[2]._id,
// 															props.match.params.id
// 														);
// 												}}
// 											>
// 												{system ? (
// 													system.syst[0].system[2].sys[2].f.map((f) => f.food.food + ', ')
// 												) : (
// 													''
// 												)}
// 											</td>
// 											<td
// 												data-label="wednesday"
// 												onClick={(e) => {
// 													if (system)
// 														props.openHandler2(
// 															'/food',
// 															system.syst[0].system[3].sys[2],
// 															system.syst[0]._id,
// 															system.syst[0].system[3]._id,
// 															props.match.params.id
// 														);
// 												}}
// 											>
// 												{system ? (
// 													system.syst[0].system[3].sys[2].f.map((f) => f.food.food + ', ')
// 												) : (
// 													''
// 												)}
// 											</td>
// 											<td
// 												data-label="friday"
// 												onClick={(e) => {
// 													if (system)
// 														props.openHandler2(
// 															'/food',
// 															system.syst[0].system[4].sys[2],
// 															system.syst[0]._id,
// 															system.syst[0].system[4]._id,
// 															props.match.params.id
// 														);
// 												}}
// 											>
// 												{system ? (
// 													system.syst[0].system[4].sys[2].f.map((f) => f.food.food + ', ')
// 												) : (
// 													''
// 												)}
// 											</td>
// 											<td
// 												data-label="friday"
// 												onClick={(e) => {
// 													if (system)
// 														props.openHandler2(
// 															'/food',
// 															system.syst[0].system[5].sys[2],
// 															system.syst[0]._id,
// 															system.syst[0].system[5]._id,
// 															props.match.params.id
// 														);
// 												}}
// 											>
// 												{system ? (
// 													system.syst[0].system[5].sys[2].f.map((f) => f.food.food + ', ')
// 												) : (
// 													''
// 												)}
// 											</td>
// 											<td
// 												data-label="friday"
// 												onClick={(e) => {
// 													if (system)
// 														props.openHandler2(
// 															'/food',
// 															system.syst[0].system[6].sys[2],
// 															system.syst[0]._id,
// 															system.syst[0].system[6]._id,
// 															props.match.params.id
// 														);
// 												}}
// 											>
// 												{system ? (
// 													system.syst[0].system[6].sys[2].f.map((f) => f.food.food + ', ')
// 												) : (
// 													''
// 												)}
// 											</td>
// 										</tr>

// 										<tr>
// 											<td>5 Pm</td>
// 											<td
// 												data-label="Sat"
// 												onClick={(e) => {
// 													if (system)
// 														props.openHandler2(
// 															'/food',
// 															system.syst[0].system[0].sys[3],
// 															system.syst[0]._id,
// 															system.syst[0].system[0]._id,
// 															props.match.params.id
// 														);
// 												}}
// 											>
// 												{system ? (
// 													system.syst[0].system[0].sys[3].f.map((f) => f.food.food + ', ')
// 												) : (
// 													''
// 												)}
// 											</td>
// 											<td
// 												data-label="sun"
// 												onClick={(e) => {
// 													if (system)
// 														props.openHandler2(
// 															'/food',
// 															system.syst[0].system[1].sys[3],
// 															system.syst[0]._id,
// 															system.syst[0].system[1]._id,
// 															props.match.params.id
// 														);
// 												}}
// 											>
// 												{system ? (
// 													system.syst[0].system[1].sys[3].f.map((f) => f.food.food + ', ')
// 												) : (
// 													''
// 												)}
// 											</td>
// 											<td
// 												data-label="tuesday"
// 												onClick={(e) => {
// 													if (system)
// 														props.openHandler2(
// 															'/food',
// 															system.syst[0].system[2].sys[3],
// 															system.syst[0]._id,
// 															system.syst[0].system[2]._id,
// 															props.match.params.id
// 														);
// 												}}
// 											>
// 												{system ? (
// 													system.syst[0].system[2].sys[3].f.map((f) => f.food.food + ', ')
// 												) : (
// 													''
// 												)}
// 											</td>
// 											<td
// 												data-label="wednesday"
// 												onClick={(e) => {
// 													if (system)
// 														props.openHandler2(
// 															'/food',
// 															system.syst[0].system[3].sys[3],
// 															system.syst[0]._id,
// 															system.syst[0].system[3]._id,
// 															props.match.params.id
// 														);
// 												}}
// 											>
// 												{system ? (
// 													system.syst[0].system[3].sys[3].f.map((f) => f.food.food + ', ')
// 												) : (
// 													''
// 												)}
// 											</td>
// 											<td
// 												data-label="friday"
// 												onClick={(e) => {
// 													if (system)
// 														props.openHandler2(
// 															'/food',
// 															system.syst[0].system[4].sys[3],
// 															system.syst[0]._id,
// 															system.syst[0].system[4]._id,
// 															props.match.params.id
// 														);
// 												}}
// 											>
// 												{system ? (
// 													system.syst[0].system[4].sys[3].f.map((f) => f.food.food + ', ')
// 												) : (
// 													''
// 												)}
// 											</td>
// 											<td
// 												data-label="friday"
// 												onClick={(e) => {
// 													if (system)
// 														props.openHandler2(
// 															'/food',
// 															system.syst[0].system[5].sys[3],
// 															system.syst[0]._id,
// 															system.syst[0].system[5]._id,
// 															props.match.params.id
// 														);
// 												}}
// 											>
// 												{system ? (
// 													system.syst[0].system[5].sys[3].f.map((f) => f.food.food + ', ')
// 												) : (
// 													''
// 												)}
// 											</td>
// 											<td
// 												data-label="friday"
// 												onClick={(e) => {
// 													if (system)
// 														props.openHandler2(
// 															'/food',
// 															system.syst[0].system[6].sys[3],
// 															system.syst[0]._id,
// 															system.syst[0].system[6]._id,
// 															props.match.params.id
// 														);
// 												}}
// 											>
// 												{system ? (
// 													system.syst[0].system[6].sys[3].f.map((f) => f.food.food + ', ')
// 												) : (
// 													''
// 												)}
// 											</td>
// 										</tr>

// 										<tr>
// 											<td>7 Pm</td>
// 											<td
// 												data-label="Sat"
// 												onClick={(e) => {
// 													if (system)
// 														props.openHandler2(
// 															'/food',
// 															system.syst[0].system[0].sys[4],
// 															system.syst[0]._id,
// 															system.syst[0].system[0]._id,
// 															props.match.params.id
// 														);
// 												}}
// 											>
// 												{system ? (
// 													system.syst[0].system[0].sys[4].f.map((f) => f.food.food + ', ')
// 												) : (
// 													''
// 												)}
// 											</td>
// 											<td
// 												data-label="sun"
// 												onClick={(e) => {
// 													if (system)
// 														props.openHandler2(
// 															'/food',
// 															system.syst[0].system[1].sys[4],
// 															system.syst[0]._id,
// 															system.syst[0].system[1]._id,
// 															props.match.params.id
// 														);
// 												}}
// 											>
// 												{system ? (
// 													system.syst[0].system[1].sys[4].f.map((f) => f.food.food + ', ')
// 												) : (
// 													''
// 												)}
// 											</td>
// 											<td
// 												data-label="tuesday"
// 												onClick={(e) => {
// 													if (system)
// 														props.openHandler2(
// 															'/food',
// 															system.syst[0].system[2].sys[4],
// 															system.syst[0]._id,
// 															system.syst[0].system[2]._id,
// 															props.match.params.id
// 														);
// 												}}
// 											>
// 												{system ? (
// 													system.syst[0].system[2].sys[4].f.map((f) => f.food.food + ', ')
// 												) : (
// 													''
// 												)}
// 											</td>
// 											<td
// 												data-label="wednesday"
// 												onClick={(e) => {
// 													if (system)
// 														props.openHandler2(
// 															'/food',
// 															system.syst[0].system[3].sys[4],
// 															system.syst[0]._id,
// 															system.syst[0].system[3]._id,
// 															props.match.params.id
// 														);
// 												}}
// 											>
// 												{system ? (
// 													system.syst[0].system[3].sys[4].f.map((f) => f.food.food + ', ')
// 												) : (
// 													''
// 												)}
// 											</td>
// 											<td
// 												data-label="friday"
// 												onClick={(e) => {
// 													if (system)
// 														props.openHandler2(
// 															'/food',
// 															system.syst[0].system[4].sys[4],
// 															system.syst[0]._id,
// 															system.syst[0].system[4]._id,
// 															props.match.params.id
// 														);
// 												}}
// 											>
// 												{system ? (
// 													system.syst[0].system[4].sys[4].f.map((f) => f.food.food + ', ')
// 												) : (
// 													''
// 												)}
// 											</td>
// 											<td
// 												data-label="friday"
// 												onClick={(e) => {
// 													if (system)
// 														props.openHandler2(
// 															'/food',
// 															system.syst[0].system[5].sys[4],
// 															system.syst[0]._id,
// 															system.syst[0].system[5]._id,
// 															props.match.params.id
// 														);
// 												}}
// 											>
// 												{system ? (
// 													system.syst[0].system[5].sys[4].f.map((f) => f.food.food + ', ')
// 												) : (
// 													''
// 												)}
// 											</td>
// 											<td
// 												data-label="friday"
// 												onClick={(e) => {
// 													if (system)
// 														props.openHandler2(
// 															'/food',
// 															system.syst[0].system[6].sys[4],
// 															system.syst[0]._id,
// 															system.syst[0].system[6]._id,
// 															props.match.params.id
// 														);
// 												}}
// 											>
// 												{system ? (
// 													system.syst[0].system[6].sys[4].f.map((f) => f.food.food + ', ')
// 												) : (
// 													''
// 												)}
// 											</td>
// 										</tr>
// 									</tbody>
// 								</table>
// 							</div>
// 							<div className={style.slide_three} style={{ minWidth: '80%' }}>
// 								<div className={s.charts}>
// 									<h3 style={{ marginLeft: '30px' }}>Motivation Charts</h3>
// 									<div id="calendar_basic" className={s.chart_content} />
// 									<div
// 										style={{
// 											textAlign: 'center',
// 											margin: '10px 0px',
// 											display: 'flex',
// 											justifyContent: 'center'
// 										}}
// 									>
// 										<div style={{ cursor: 'pointer' }} onClick={() => leftToggleChart()}>
// 											{' '}
// 											<ArrowBackIosIcon />
// 										</div>
// 										<span>
// 											{' '}
// 											{weeks ? weeks[weekIndex] ? (
// 												moment(weeks[weekIndex]).format('YYYY/MM/DD')
// 											) : (
// 												''
// 											) : (
// 												''
// 											)}{' '}
// 										</span>
// 										<div style={{ cursor: 'pointer' }} onClick={() => rightToggleChart()}>
// 											{' '}
// 											<ArrowForwardIosIcon />
// 										</div>
// 									</div>
// 									<LineChart
// 										param={true}
// 										currentWeekPerfectPath={currentWeekPerfectPath}
// 										currentWeekWeight={currentWeekWeight}
// 										currentWeek={weeks[weekIndex]}
// 									/>
// 								</div>
// 							</div>
// 						</div>
// 						<div>
// 							<i className={`material-icons arrow_back ${style.arrow} ${style.arrow_back}`}>arrow_back</i>
// 							<i className={`material-icons arrow_forward ${style.arrow} ${style.arrow_forward}`}>
// 								arrow_forward
// 							</i>
// 						</div>
// 					</div>
// 				</div>
// 			</section>
// 		</div>
// 	);
// }

// export default MyTrainees;
