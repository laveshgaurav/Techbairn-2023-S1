const express = require("express");
const blogModel = require("../models/blogModel");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    let blogs = await blogModel
      .find({
        isDeleted: false,
      })
      .sort({
        createdAt: "desc",
      });
    return res.send({
      blogs,
      status: true,
    });
  } catch (e) {
    return res.send({
      error: e.message,
      status: false,
    });
  }
});

router.post("/new-blog", async (req, res) => {
  try {
    let newBlog = new blogModel({
      ...req.body,
      createdAt: new Date(),
    });
    await newBlog.save();
    return res.send({
      status: true,
      message: "Blog created !",
    });
  } catch (e) {
    return res.send({
      error: e.message,
      status: false,
    });
  }
});

router.delete("/delete/:id", async (req, res) => {
  try {
    let foundBlog = await blogModel.findOne({
      _id: req?.params?.id,
      isDeleted: false,
    });

    if (!foundBlog) {
      return res.send({
        message: "No blog found !",
        status: true,
      });
    }

    await blogModel.findOneAndUpdate(
      {
        _id: req?.params?.id,
        isDeleted: false,
      },
      {
        isDeleted: true,
        deletedAt: new Date(),
      }
    );

    return res.send({
      message: "Blog Deleted",
      status: true,
    });
  } catch (e) {
    return res.send({
      error: e.message,
      status: false,
    });
  }
});

module.exports = router;
