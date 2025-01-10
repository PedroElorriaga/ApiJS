class HomeController {
  homeIndex(req, res) {
    res.status(200).json({
      status: "Working",
    })
  };
}

export default new HomeController();
