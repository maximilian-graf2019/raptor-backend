import trails from "../db.ts"


// @description: GET all Trails
// @route GET /api/trails
const getTrails = async ({ response }: { response: any }) => {
  try {
    const allTrails = await trails.find({}).toArray();
    console.log(allTrails);
    if (allTrails) {
      response.status = 200;
      response.body = {
        success: true,
        data: allTrails,
      };
    } else {
      response.status = 500;
      response.body = {
        success: false,
        msg: "Internal Server Error",
      };
    }
  } catch (err) {
    response.body = {
      success: false,
      msg: err.toString(),
    };
  }
};

// @description: GET single trail
// @route GET /api/trails/:id
const getTrail = async ({
  params,
  response,
}: {
  params: { id: string };
  response: any;
}) => {

  console.log("Das ist params", params)
  console.log("Das ist params.id", params.id)
  const trail = await trails.findOne({ trailID: params.id });

  if (trail) {
    response.status = 200;
    response.body = {
      success: true,
      data: trail,
    };
  } else {
    response.status = 404;
    response.body = {
      success: false,
      msg: "No trail found",
    };
  }
};

// @description: GET search result for keys
// @route GET /api/trails/searchKeys
const searchTrail = async ({
  params,
  response,
}: {
  params: any;
  response: any;
}) => {

  console.log("I'm searching the following parameters!")
  console.log(params)

  const searchedTrails = await trails.find(params).toArray();

  if(searchedTrails) {
    response.status = 200;
    response.body = {
      success: true,
      data: searchedTrails,
    };
  } else {
    response.status = 404;
    response.body = {
      success: false,
      msg: "No trails found",
    };
  }
};

// @description: ADD single trail
// @route POST /api/trails
const addTrail = async ({
  request,
  response,
}: {
  request: any;
  response: any;
}) => {
  try {
    if (!request.hasBody) {
      response.status = 400;
      response.body = {
        success: false,
        msg: "No Data",
      };
    } else {
      const body = await request.body();
      const trail = await body.value;
      await trails.insertOne(trail);
      response.status = 201;
      response.body = {
        success: true,
        data: trail,
      };
    }
  } catch (err) {
    response.body = {
      success: false,
      msg: err.toString(),
    };
  }
};

// @description: UPDATE single trail
// @route PUT /api/trails/:id
const updateTrail = async ({
  params,
  request,
  response,
}: {
  params: { id: string };
  request: any;
  response: any;
}) => {
  try {
    const body = await request.body();
    const inputTrail = await body.value;
    await trails.updateOne(
      { trailID: params.id },
      { $set: { title: inputTrail.title, length: inputTrail.length } }
    );
    const updatedTrail = await trails.findOne({ trailID: params.id });
    response.status = 200;
    response.body = {
      success: true,
      data: updatedTrail,
    };
  } catch (err) {
    response.body = {
      success: false,
      msg: err.toString(),
    };
  }
};

// @description: DELETE single trail
// @route DELETE /api/trails/:id
const deleteTrail = async ({
  params,
  response,
}: {
  params: { id: string };
  request: any;
  response: any;
}) => {
  try {
    await trails.deleteOne({ trailID: params.id });
    response.status = 201;
    response.body = {
      success: true,
      msg: "Product deleted",
    };
  } catch (err) {
    response.body = {
      success: false,
      msg: err.toString(),
    };
  }
};

export { getTrails, getTrail, searchTrail, addTrail, updateTrail, deleteTrail };