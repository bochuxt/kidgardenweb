/**
 * Created by georgehu on 1/3/17.
 */

const  Express =require( 'express');
const APIServiceWrapperController =require( '../controllers/APIWrapper.controller');


const router = new Express.Router();


// Get all request
router.route('/NodeAPIServiceWrapper').get(APIServiceWrapperController.pyhtonServiceAPICallWrapper);
router.route('/NodeAPIServiceWrapper').post(APIServiceWrapperController.pyhtonServiceAPICallWrapper);

module.exports= router;
