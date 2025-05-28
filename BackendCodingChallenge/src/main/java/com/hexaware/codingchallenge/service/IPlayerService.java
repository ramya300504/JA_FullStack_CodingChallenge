package com.hexaware.codingchallenge.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.hexaware.codingchallenge.dto.PlayerDTO;
import com.hexaware.codingchallenge.entity.Player;
import com.hexaware.codingchallenge.exceptions.InvalidPlayerIDException;


public interface IPlayerService {
	
	List<Player> getAllPlayers();
	
	Player createNewPlayer(PlayerDTO playerDTO);
	
	Player updatePlayer(long playerId,PlayerDTO playerDTO) throws InvalidPlayerIDException;
	
	String deletePlayerById(long playerId);
	
	Player getPlayerById(long playerId);

}
