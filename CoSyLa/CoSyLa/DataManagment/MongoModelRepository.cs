using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using MongoDB.Driver;
using System.Configuration;

namespace CoSyLa.DataManagment
{
	 public class MongoModelRepository: IModelRepository
	 {
		  MongoClient _Client;

		  public MongoModelRepository()
		  {
				string conectParams = ConfigurationManager.ConnectionStrings["MongoDb"].ConnectionString;
				_Client = new MongoClient(conectParams);
		  }
		  public MongoModelRepository(MongoClient mongoClient)
		  {
				_Client = mongoClient;
		  }
	 }
}