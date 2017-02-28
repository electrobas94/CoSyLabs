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
		  [BsonId]
		  public ObjectId IdElement { get; set; }
		  public string NameElement { get; set; }
		  public string DescriptionElement { get; set; }
		  public ObjectId PreviewImageFile { get; set; }

		  public List<string> GeneralTags { get; set; }
		  public List<string> UserTags    { get; set; }

		  public int IdTypeElement    { get; set; }
		  public int IdSubTypeElement { get; set; }

		  public List<ObjectId> Models3D { get; set; }
		  public List<ObjectId> KeyFrameValues { get; set; }
	 }
}