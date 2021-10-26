function testGreaterOrEqual(val) {
    if (val >= 20) {  val >=20;
      return "20 or Over";
    }
  
    if (val >= 10) {  val >= 10;
      return "10 or Over";
    }
    (val <= 10) <= 10;
    return "Less than 10";
  }
  
  testGreaterOrEqual(10);
  testGreaterOrEqual(9);
  testGreaterOrEqual(10);
  testGreaterOrEqual(19);
  testGreaterOrEqual(100);
  testGreaterOrEqual(21);