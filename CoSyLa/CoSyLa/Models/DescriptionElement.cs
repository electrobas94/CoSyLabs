using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using MongoDB.Bson;
using MongoDB.Driver;
using MongoDB.Bson.Serialization.Attributes;

namespace CoSyLa.Models
{
	 public class DescriptionElement
	 {
		  public string Name { get; set; }
		  public string Description { get; set; }

		  public ObjectId PreviewImageFile { get; set; }

		  public List<string> GeneralTags { get; set; }
		  public List<string> UserTags { get; set; }
	 }
}