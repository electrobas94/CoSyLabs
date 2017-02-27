using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using MongoDB.Driver;

namespace CoSyLa.DataManagment
{
	 public interface IRepositoryManager
	 {
		  ILaboratotyRepository laboratotyRepository { get; }
		  IInstrumentRepository instrumentRepository { get; }
		  IElementRepository    elementRepository    { get; }
	 }
}