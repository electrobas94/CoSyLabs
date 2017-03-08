using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using MongoDB.Bson;
using MongoDB.Driver;
using MongoDB.Bson.Serialization.Attributes;

namespace CoSyLa.Models
{
	 public class VisualElement
	 {
		  // Start duplicate section
		  [BsonId]
		  public ObjectId Id { get; set; }

		  public DescriptionElement Description { get; set; }

		  public int IdTypeElement    { get; set; }
		  public int IdSubTypeElement { get; set; }

		  public List<ObjectId> Models3D { get; set; }
		  public List<ObjectId> KeyFrameValues { get; set; }
	 }
}