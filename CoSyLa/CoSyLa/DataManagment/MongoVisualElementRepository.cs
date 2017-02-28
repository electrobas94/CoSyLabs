using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using MongoDB.Driver;
using System.Configuration;

namespace CoSyLa.DataManagment
{
	 public class MongoVisualElementRepository: IVisualElementRepository
	 {
		  MongoClient _Client;

		  public MongoVisualElementRepository()
		  {
				string conectParams = ConfigurationManager.ConnectionStrings["MongoDb"].ConnectionString;
				_Client = new MongoClient(conectParams);
		  }
		  public MongoVisualElementRepository(IMongoDatabase mongoClient)
		  {
				_Client = mongoClient;
		  }
	 }
}