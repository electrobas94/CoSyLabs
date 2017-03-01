using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using MongoDB.Bson;
using MongoDB.Driver;
using MongoDB.Bson.Serialization.Attributes;

namespace CoSyLa.Models
{
	 public class VirtualLabolatory
	 {
		  [BsonId]
		  public ObjectId Id { get; set; }

		  public DescriptionElement Description { get; set; }

		  public ObjectId LocationInstruments { get; set; }
		  public ObjectId FileOfTheory { get; set; }

		  // Instrument setting and main symulation parametr (file or json or string in key-value format ?)
		  public string SymulationSetting { get; set; }
	 }
}