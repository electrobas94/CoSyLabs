using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.UI;
using MongoDB.Bson;
using MongoDB.Driver;
using MongoDB.Bson.Serialization.Attributes;


namespace CoSyLa.Models
{
	 // I did not found this structure in .Net for MVC project 
	 public struct Point3D
	 {
		  float X;
		  float Y;
		  float Z;
	 }

	 public class LocationItem
	 {
		  public ObjectId Id { get; set; }

		  public Point3D  Position { get; set; }
		  public Point3D  Rotation { get; set; }
		  public Point3D	Scale    { get; set; }
	 }

	 public class LocationData
	 {
		  [BsonId]
		  public ObjectId Id { get; set; }
		  public List<LocationItem> Elements;
	 }
}