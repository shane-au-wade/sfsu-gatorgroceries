import {ObjectId} from 'bson';

class Task {
  /**
   *
   * @param {string} name The name of the task
   * @param {string status The status of the task. Default value is "Open"
   * @param {ObjectId} id The ObjectId to create this task with
   */
  constructor({
    name,
    partition,
    status = Task.STATUS_OPEN,
    id = new ObjectId(),
  }) {
    this._partition = partition;
    this._id = id;
    this.name = name;
    this.status = status;
  }

  static STATUS_OPEN = 'Open';
  static STATUS_IN_PROGRESS = 'InProgress';
  static STATUS_COMPLETE = 'Complete';
  static schema = {
    name: 'Task',
    properties: {
      _id: 'objectId',
      _partition: 'string',
      name: 'string',
      status: 'string',
    },
    primaryKey: '_id',
  };
}


class LCRideEntry {
  /**
   *
   * @param {string} name The name of the task
   * @param {string status The status of the task. Default value is "Open"
   * @param {ObjectId} id The ObjectId to create this task with
   */
  constructor({
    id = new ObjectId(),
    partition,
    rideID, 
      rideName,
      escName,
      escFWVersion,
      rideDate,
      hasFault,
      escHWVersion, 
    
  }) {
    this._partition = partition;
    this._id = id;
    this.rideID = rideID;
      this.rideName = rideName;
      this.escName = escName;
      this.escFWVersion = escFWVersion;
      this.rideDate = rideDate;
      this.hasFault = hasFault;
      this.escHWVersion = escHWVersion;
  }

  static schema = {
    name: 'LCRideEntry',
    properties: {
      _id: 'objectId',
      _partition: 'string',
      rideID: 'string',
      rideName: 'string',
      escName: 'string',
      escFWVersion: 'string',
      rideDate: 'date',
      hasFault: 'bool',
      escHWVersion: 'string'
    },
    primaryKey: '_id',
  };
}


class LCRideDatapoint {
  /**
   *
   * @param {string} name The name of the task
   * @param {string status The status of the task. Default value is "Open"
   * @param {ObjectId} id The ObjectId to create this task with
   */
  constructor({
    id = new ObjectId(),
    partition,
    rideID, 
      dataPointTime,
      tempMos,
      tempMosFahrenheit,
      tempMotor,
      currentMotor,
      inputCurrent,
      focID,
      focIQ,
      dutyCycleNow,
      rpm,
      inputVoltage,
      ampHours,
      ampHoursCharged,
      wattHours,
      wattHoursCharged,
      faultCode,
      gpsSpeed,
      latitude,
      longitude,
      altitude,
      speed,
      speedMPH,
      gpsSpeedMPH,
      tempMotorFahrenheit,
    
  }) {
    this._partition = partition;
    this._id = id;
    this.rideID = rideID;
      this.dataPointTime = dataPointTime
      this.tempMos = tempMos
      this.tempMosFahrenheit =  tempMosFahrenheit
      this.tempMotor = tempMotor
      this.currentMotor =  currentMotor
      this.inputCurrent =  inputCurrent
      this.focID = focID
      this.focIQ = focIQ
      this.dutyCycleNow =  dutyCycleNow
      this.rpm = rpm
      this.inputVoltage = inputVoltage
      this.ampHours = ampHours
      this.ampHoursCharged = ampHoursCharged
      this.wattHours = wattHours
      this.wattHoursCharged = wattHoursCharged
      this.faultCode = faultCode
      this.gpsSpeed = gpsSpeed
      this.latitude = latitude
      this.longitude = longitude
      this.altitude = altitude
      this.speed = speed
      this.speedMPH = speedMPH
      this.gpsSpeedMPH = gpsSpeedMPH
      this.tempMotorFahrenheit = tempMotorFahrenheit
  }

  static schema = {
    name: 'LCRideDatapoint',
    properties: {
      _id: 'objectId',
      _partition: 'string',
      rideID: 'string',
      dataPointTime: 'date',
      tempMos: 'float',
      tempMosFahrenheit: 'float',
      tempMotor: 'float',
      currentMotor: 'float',
      inputCurrent: 'float',
      focID: 'float',
      focIQ: 'float',
      dutyCycleNow: 'float',
      rpm: 'float',
      inputVoltage: 'float',
      ampHours: 'float',
      ampHoursCharged: 'float',
      wattHours: 'float',
      wattHoursCharged: 'float',
      faultCode: 'int',
      gpsSpeed: 'double',
      latitude: 'double',
      longitude: 'double',
      altitude: 'double',
      speed: 'float',
      speedMPH: 'float',
      gpsSpeedMPH: 'double',
      tempMotorFahrenheit: 'float'
    }
  }
}




export {Task, LCRideEntry, LCRideDatapoint};
