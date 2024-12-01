// THERE ARE TWO METHODS FOR CREATING ASYNCHANDLER WITH TRY CATCH OR PROMISES

// METHOD 1
const asyncHandler = (func) => {
  return (req, res, next) => {
    Promise.resolve(func(req, res, next)).catch((err) => next(err));
  };
};

// simplified version of above code

// const asyncHandler = (func) => (req, res, next) => {
//     return Promise.resolve(func(req, res, next)).catch((err) => next(err));
//   };


// METHOD 2
// const asyncHandler = (func) => async (req, res, next) => {
//   try {
//     await func(req, res, next);
//   } catch (err) {
//     console.log(err);
//     res.status(err.code || 500).json({
//       success: false,
//       message: err.message,
//     });
//   }
// };

export { asyncHandler };

// NOTES

// const fun = () => {}; // an arrow function
// const fun1 = () =>{ () => {} }  // arrow function inside arrow function
// const fun2 = () => () => {}  // can be written like this

// const fun3 = (func) => async() => {}  // async arrow function inside arrow function which expect funtion as an argument
