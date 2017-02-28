using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using MongoDB.Bson;
using MongoDB.Driver;

namespace CoSyLa.Models
{
	 public class Model3D
	 {
		  public ObjectId IdModel { get; set; }
		  public string NameModel { get; set; }

		  public ObjectId IdMeshFileJson { get; set; }
		  public ObjectId IdMeshFileBin  { get; set; }

		  public List<ObjectId> TextureFiles { get; set; }
	 }
}