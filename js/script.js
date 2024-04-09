// Copyright (c) 2024 Mr. Coxall All rights reserved
//
// Created by: Calista.E
// Created on: Apr 2024
// This file contains the JS functions for index.html

"use strict"

/**
 * This function calculates volume of a sphere.
 */
function calculateVolumeOfSphere() {
  // input
  const radiusOfSphere = parseFloat(document.getElementById('radius-of-sphere').value)

  // process
  const volumeOfSphere = 4 / 3 * 3.14 * radiusOfSphere

  // output
    document.getElementById('volume').innerHTML = 'Volume is: ' + volumeOfSphere.toFixed(2) + ' mm³'
}
