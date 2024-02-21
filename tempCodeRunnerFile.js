app.get('/api/v1/hospitals', (req, res) => {
    res.status(200).json({success: true, msg:"Show all hospitals"});
  });