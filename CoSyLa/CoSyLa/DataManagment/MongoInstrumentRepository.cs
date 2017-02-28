using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using MongoDB.Driver;
using System.Configuration;

namespace CoSyLa.DataManagment
{
	 public class MongoInstrumentRepository: IInstrumentRepository
	 {
		  MongoClient _Client;
		  public MongoInstrumentRepository()
		  {
				string conectParams = ConfigurationManager.ConnectionStrings["MongoDb"].ConnectionString;
				_Client = new MongoClient(conectParams);
		  }
		  public MongoInstrumentRepository(IMongoDatabase mongoClient)
		  {
				_Client = mongoClient;
		  }
	 }
}