// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { Box } from '@mui/material';

// import { exerciseOptions, fetchData, youtubeOptions } from '../utils/fetchData';
// import Detail from '../components/Detail';
// import ExerciseVideos from '../components/ExerciseVideos';
// import SimilarExercises from '../components/SimilarExercises';

// const ExerciseDetail = () => {
//   const [exerciseDetail, setExerciseDetail] = useState({});
//   const [exerciseVideos, setExerciseVideos] = useState([]);
//   const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);
//   const [equipmentExercises, setEquipmentExercises] = useState([]);
//   const { id } = useParams();

//   useEffect(() => {
//     window.scrollTo({ top: 0, behavior: 'smooth' });

//     const fetchExercisesData = async () => {
//       const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';
//       const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';

//       const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`, exerciseOptions);
//       setExerciseDetail(exerciseDetailData);

//       const exerciseVideosData = await fetchData(`${youtubeSearchUrl}/search?query=${exerciseDetailData.name} exercise`, youtubeOptions);
//       setExerciseVideos(exerciseVideosData.contents);

//       const targetMuscleExercisesData = await fetchData(`${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`, exerciseOptions);
//       setTargetMuscleExercises(targetMuscleExercisesData);

//       const equimentExercisesData = await fetchData(`${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`, exerciseOptions);
//       setEquipmentExercises(equimentExercisesData);
//     };

//     fetchExercisesData();
//   }, [id]);

//   if (!exerciseDetail) return <div>No Data</div>;

//   return (
//     <Box sx={{ mt: { lg: '96px', xs: '60px' } }}>
//       <Detail exerciseDetail={exerciseDetail} />
//       <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name} />
//       <SimilarExercises targetMuscleExercises={targetMuscleExercises} equipmentExercises={equipmentExercises} />
//     </Box>
//   );
// };

// export default ExerciseDetail;

// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { Box } from '@mui/material';

// import { exerciseOptions, fetchData, youtubeOptions } from '../utils/fetchData';
// import Detail from '../components/Detail';
// import ExerciseVideos from '../components/ExerciseVideos';
// import SimilarExercises from '../components/SimilarExercises';

// const ExerciseDetail = () => {
//   const [exerciseDetail, setExerciseDetail] = useState({});
//   const [exerciseVideos, setExerciseVideos] = useState([]);
//   const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);
//   const [equipmentExercises, setEquipmentExercises] = useState([]);
//   const { id } = useParams();

//   useEffect(() => {
//     window.scrollTo({ top: 0, behavior: 'smooth' });

//     const fetchExercisesData = async () => {
//       const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';
//       const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';

//       try {
//         // Fetch exercise detail
//         const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`, exerciseOptions);
//         console.log('Exercise Detail Data:', exerciseDetailData);
//         setExerciseDetail(exerciseDetailData);

//         // Fetch exercise videos
//         const exerciseVideosData = await fetchData(
//           `${youtubeSearchUrl}/search?query=${exerciseDetailData.name} exercise`,
//           youtubeOptions,
//         );
//         console.log('Exercise Videos Data:', exerciseVideosData);
//         setExerciseVideos(Array.isArray(exerciseVideosData.contents) ? exerciseVideosData.contents : []);

//         // Fetch exercises by target muscle
//         const targetMuscleExercisesData = await fetchData(
//           `${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`,
//           exerciseOptions,
//         );
//         console.log('Target Muscle Exercises Data:', targetMuscleExercisesData);
//         setTargetMuscleExercises(Array.isArray(targetMuscleExercisesData) ? targetMuscleExercisesData : []);

//         // Fetch exercises by equipment
//         const equipmentExercisesData = await fetchData(
//           `${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`,
//           exerciseOptions,
//         );
//         console.log('Equipment Exercises Data:', equipmentExercisesData);
//         setEquipmentExercises(Array.isArray(equipmentExercisesData) ? equipmentExercisesData : []);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchExercisesData();
//   }, [id]);

//   if (!exerciseDetail || Object.keys(exerciseDetail).length === 0) return <div>No Data Available</div>;

//   return (
//     <Box sx={{ mt: { lg: '96px', xs: '60px' } }}>
//       <Detail exerciseDetail={exerciseDetail} />
//       <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name} />
//       <SimilarExercises targetMuscleExercises={targetMuscleExercises} equipmentExercises={equipmentExercises} />
//     </Box>
//   );
// };

// export default ExerciseDetail;

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';

import { exerciseOptions, fetchData, youtubeOptions } from '../utils/fetchData';
import Detail from '../components/Detail';
import ExerciseVideos from '../components/ExerciseVideos';
import SimilarExercises from '../components/SimilarExercises';

const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const [exerciseVideos, setExerciseVideos] = useState([]);
  const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);
  const [equipmentExercises, setEquipmentExercises] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    const fetchExercisesData = async () => {
      const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';
      const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';

      try {
        const exerciseDetailData = await fetchData(
          `${exerciseDbUrl}/exercises/exercise/${id}`,
          exerciseOptions,
        );

        if (exerciseDetailData) {
          setExerciseDetail(exerciseDetailData);

          const exerciseVideosData = await fetchData(
            `${youtubeSearchUrl}/search?query=${exerciseDetailData.name} exercise`,
            youtubeOptions,
          );
          setExerciseVideos(exerciseVideosData.contents || []);

          const targetMuscleExercisesData = await fetchData(
            `${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`,
            exerciseOptions,
          );
          setTargetMuscleExercises(Array.isArray(targetMuscleExercisesData) ? targetMuscleExercisesData : []);

          const equipmentExercisesData = await fetchData(
            `${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`,
            exerciseOptions,
          );
          setEquipmentExercises(Array.isArray(equipmentExercisesData) ? equipmentExercisesData : []);
        } else {
          console.error('No exercise detail data received'); // eslint-disable-line no-console
        }
      } catch (err) {
        console.error('Error fetching exercise data:', err); // eslint-disable-line no-console
      }
    };

    fetchExercisesData();
  }, [id]);

  if (!exerciseDetail || !Object.keys(exerciseDetail).length) return <div>No Data</div>;

  return (
    <Box sx={{ mt: { lg: '96px', xs: '60px' } }}>
      <Detail exerciseDetail={exerciseDetail} />
      <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name} />
      <SimilarExercises
        targetMuscleExercises={targetMuscleExercises}
        equipmentExercises={equipmentExercises}
      />
    </Box>
  );
};

export default ExerciseDetail;
