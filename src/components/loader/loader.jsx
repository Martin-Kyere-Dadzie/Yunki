import React from 'react'
import { useState, useEffect } from 'react';


 export const [loader, setLoader] = useState(false);
  useEffect(() => {
    setLoader(true);
    setTimeout(() => {
      setLoader(false)
    }, 3000);

  }, []);

