package com.hexaware.codingchallenge.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hexaware.codingchallenge.dto.PlayerDTO;
import com.hexaware.codingchallenge.entity.Player;
import com.hexaware.codingchallenge.exceptions.InvalidPlayerIDException;
import com.hexaware.codingchallenge.repository.PlayerRepository;

@Service
public class PlayerServiceImpl implements IPlayerService {

	@Autowired
	PlayerRepository playerRepository;
	
	@Override
	public List<Player> getAllPlayers() {
		
	   return	playerRepository.findAll();
	}

	@Override
	public Player createNewPlayer(PlayerDTO playerDTO) {
		
		Player newPlayer= new Player();
		
		newPlayer.setPlayerId(playerDTO.getPlayerId());
		newPlayer.setPlayerName(playerDTO.getPlayerName());
		newPlayer.setJerseyNumber(playerDTO.getJerseyNumber());
		newPlayer.setRole(playerDTO.getRole());
		newPlayer.setStateName(playerDTO.getStateName());
		newPlayer.setTeamName(playerDTO.getTeamName());
		newPlayer.setDescription(playerDTO.getDescription());
		newPlayer.setTotalMatches(playerDTO.getTotalMatches());
		
		return playerRepository.save(newPlayer);
	}

	@Override
	public Player updatePlayer(long playerId,PlayerDTO playerDTO) throws InvalidPlayerIDException {
		
		Player updatePlayer=playerRepository.findById(playerId).orElse(null);
		
		if(updatePlayer==null)
		{
			throw new InvalidPlayerIDException();
		}
		
		updatePlayer.setPlayerId(playerDTO.getPlayerId());
		updatePlayer.setPlayerName(playerDTO.getPlayerName());
		updatePlayer.setStateName(playerDTO.getStateName());
		updatePlayer.setTeamName(playerDTO.getTeamName());
		updatePlayer.setDescription(playerDTO.getDescription());
		updatePlayer.setTotalMatches(playerDTO.getTotalMatches());
		updatePlayer.setJerseyNumber(playerDTO.getJerseyNumber());
		updatePlayer.setRole(playerDTO.getRole());
		
		return playerRepository.save(updatePlayer);
	}

	@Override
	public String deletePlayerById(long playerId) {
		
		   
		playerRepository.deleteById(playerId);
		
		Player deletedPlayer=playerRepository.findById(playerId).orElse(null);
		
		if(deletedPlayer==null)
		{
			return "Player Deleted Succesfully";
		}
		
		return "";
	}

	@Override
	public Player getPlayerById(long playerId) {
		
		return playerRepository.findById(playerId).orElse(null);
	}

}
