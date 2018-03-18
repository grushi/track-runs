import { IActivity } from './activity.model';

export const SAVED_ACTIVITIES: IActivity[] = [
{
  "id" : 1,
  "name" : "Saat Rasta",
  "date" : new Date('03/15/2018'),
  "distance" : 7.2,
  "comments" : "Nice day...",
  "gpxData": '../../assets/gpx/1.gpx'
},
{
   "id": 2,
   "name": 'Aasra Chowk Route',
   "date": new Date('03/16/2018'),
   "gpxData": '../../assets/gpx/2.gpx',
   "distance": 6.2,
   "comments": 'Cool and windy...'
 },
 {
   "id": 3,
   "name": 'Dmart Route',
   "date": new Date('03/17/2018'),
   "gpxData": '../../assets/gpx/3.gpx',
   "distance": 4.2,
   "comments": 'Evening run...'
 },
 {
   "id": 4,
   "name": 'Ashok Nagar Route',
   "date": new Date('03/18/2018'),
   "gpxData": '../../assets/gpx/4.gpx',
   "distance": 3.4,
   "comments": 'Cool and windy by the trafic...'
 }
]
