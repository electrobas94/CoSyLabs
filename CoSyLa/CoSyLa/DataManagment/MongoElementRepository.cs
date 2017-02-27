using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using MongoDB.Driver;
using System.Configuration;

namespace CoSyLa.DataManagment
{
	 public class MongoElementRepository: IElementRepository
	 {
		  MongoClient _Client;

		  public MongoElementRepository()
		  {
				string conectParams = ConfigurationManager.ConnectionStrings["MongoDb"].ConnectionString;
				_Client = new MongoClient(conectParams);
		  }
		  public MongoElementRepository(MongoClient mongoClient)
		  {
				_Client = mongoClient;
		  }
	 }
}