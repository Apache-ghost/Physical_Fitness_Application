
import React, { useEffect, useState } from 'react';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';

import { exerciseOptions, fetchData } from '../utils/fetchData';
import HorizontalScrollbar from './HorizontalScrollbar';

const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {
  const [search, setSearch] = useState('');
  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    const fetchExercisesData = async () => {
      try {
        const bodyPartsData = await fetchData(
          'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
          exerciseOptions,
        );

        if (Array.isArray(bodyPartsData)) {
          setBodyParts(['all', ...bodyPartsData]);
        } else {
          setBodyParts(['all']);
        }
      } catch (error) {
        setBodyParts(['all']);
      }
    };

    fetchExercisesData();
  }, []);

  const handleSearch = async () => {
    if (search) {
      try {
        const exercisesData = await fetchData(
          'https://exercisedb.p.rapidapi.com/exercises',
          exerciseOptions,
        );
        const searchedExercises = exercisesData.filter(
          (item) => item.name.toLowerCase().includes(search)
            || item.target.toLowerCase().includes(search)
            || item.equipment.toLowerCase().includes(search)
            || item.bodyPart.toLowerCase().includes(search),
        );
        window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
        setSearch('');
        setExercises(searchedExercises);
      } catch (error) {
        // Handle error here if necessary
      }
    }
  };

  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: '44px', xs: '30px' } }}
        mb="49px"
        textAlign="center"
      >
        Awesome Exercises You <br /> Should Know
      </Typography>
      <Box position="relative" mb="72px">
        <TextField
          height="76px"
          sx={{
            input: { fontWeight: '700', border: 'none', borderRadius: '4px' },
            width: { lg: '1170px', xs: '350px' },
            backgroundColor: '#fff',
            borderRadius: '40px',
          }}
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder="Search Exercises"
          type="text"
        />
        <Button
          className="search-btn"
          sx={{
            bgcolor: '#FF2625',
            color: '#fff',
            textTransform: 'none',
            width: { lg: '173px', xs: '80px' },
            height: '56px',
            position: 'absolute',
            right: '0px',
            fontSize: { lg: '20px', xs: '14px' },
          }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>
      <Box sx={{ position: 'relative', width: '100%', p: '20px' }}>
        <HorizontalScrollbar
          data={bodyParts.length ? bodyParts : []}
          setBodyPart={setBodyPart}
          bodyPart={bodyPart}
        />
      </Box>
    </Stack>
  );
};

export default SearchExercises;
// import React, { useEffect, useState } from 'react';
// import { Box, Button, Stack, TextField, Typography, CircularProgress, Snackbar } from '@mui/material';

// import { exerciseOptions, fetchData } from '../utils/fetchData';
// import HorizontalScrollbar from './HorizontalScrollbar';

// const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {
//   const [search, setSearch] = useState('');
//   const [bodyParts, setBodyParts] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [noResults, setNoResults] = useState(false); // New state for "no results" message

//   useEffect(() => {
//     const fetchExercisesData = async () => {
//       try {
//         const bodyPartsData = await fetchData(
//           'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
//           exerciseOptions,
//         );

//         if (Array.isArray(bodyPartsData)) {
//           setBodyParts(['all', ...bodyPartsData]);
//         } else {
//           setBodyParts(['all']);
//         }
//       } catch (error) {
//         setBodyParts(['all']);
//       }
//     };

//     fetchExercisesData();
//   }, []);

//   const handleSearch = async () => {
//     if (search) {
//       setLoading(true);
//       setNoResults(false); // Reset "no results" state
//       try {
//         const exercisesData = await fetchData(
//           'https://exercisedb.p.rapidapi.com/exercises',
//           exerciseOptions,
//         );

//         // const searchedExercises = exercisesData.filter(
//         //   (item) =>
//         //     item.name.toLowerCase().includes(search) ||
//         //     item.target.toLowerCase().includes(search) ||
//         //     item.equipment.toLowerCase().includes(search) ||
//         //     item.bodyPart.toLowerCase().includes(search),
//         // );
//         const searchedExercises = exercisesData.filter(
//           (item) => item.name.toLowerCase().includes(search)
//                       || item.target.toLowerCase().includes(search)
//                       || item.equipment.toLowerCase().includes(search)
//                       || item.bodyPart.toLowerCase().includes(search),
//         );

//         if (searchedExercises.length === 0) {
//           setNoResults(true); // Set no results state to true
//         } else {
//           window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
//           setExercises(searchedExercises);
//         }

//         setSearch('');
//       } catch (error) {
//         console.error(error); // Handle error
//       } finally {
//         setLoading(false); // Stop loading
//       }
//     }
//   };

//   return (
//     <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
//       <Typography
//         fontWeight={700}
//         sx={{ fontSize: { lg: '44px', xs: '30px' } }}
//         mb="49px"
//         textAlign="center"
//       >
//         Awesome Exercises You <br /> Should Know
//       </Typography>
//       <Box position="relative" mb="72px">
//         <TextField
//           height="76px"
//           sx={{
//             input: { fontWeight: '700', border: 'none', borderRadius: '4px' },
//             width: { lg: '1170px', xs: '350px' },
//             backgroundColor: '#fff',
//             borderRadius: '40px',
//           }}
//           value={search}
//           onChange={(e) => setSearch(e.target.value.toLowerCase())}
//           placeholder="Search Exercises"
//           type="text"
//         />
//         <Button
//           className="search-btn"
//           sx={{
//             bgcolor: '#FF2625',
//             color: '#fff',
//             textTransform: 'none',
//             width: { lg: '173px', xs: '80px' },
//             height: '56px',
//             position: 'absolute',
//             right: '0px',
//             fontSize: { lg: '20px', xs: '14px' },
//           }}
//           onClick={handleSearch}
//         >
//           {loading ? <CircularProgress size={24} color="inherit" /> : 'Search'}
//         </Button>
//       </Box>

//       {/* Display "No results found" message */}
//       <Snackbar
//         open={noResults}
//         onClose={() => setNoResults(false)}
//         message="No exercises found for your search!"
//         autoHideDuration={3000}
//       />

//       <Box sx={{ position: 'relative', width: '100%', p: '20px' }}>
//         <HorizontalScrollbar
//           data={bodyParts.length ? bodyParts : []}
//           setBodyPart={setBodyPart}
//           bodyPart={bodyPart}
//         />
//       </Box>
//     </Stack>
//   );
// };

// export default SearchExercises;
