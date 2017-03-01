using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using MongoDB.Bson;
using MongoDB.Driver;
using MongoDB.Bson.Serialization.Attributes;

namespace CoSyLa.Models
{
	 public class VirtuaInstrument
	 {
		  [BsonId]
		  public ObjectId Id { get; set; }

		  public DescriptionElement  Description { get; set; }

		  public ObjectId LogicOfWorkJSFile   { get; set; }
		  public ObjectId LocationElements { get; set; }
	 }
}